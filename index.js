#!/bin/node

const fetch = require('node-fetch');
const beautify = require('js-beautify');
const {parse} = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;
const isVarName = require('is-var-name');
const fs = require('fs');

const checkSwitchableTest = ({type, left, right, operator}) => type === 'BinaryExpression' && left.type === 'Identifier' && (left.name === 'Tira' || left.name === 'egl') && operator === '==' && right.type === 'StringLiteral';

const checkSwitchableMultiTest = ({type, left, right, operator}) => type === 'LogicalExpression' && checkSwitchableTest(left) && operator === '||' && checkSwitchableTest(right);

const createExpressionStatements = (expressions) => expressions.map(expression => t.expressionStatement(expression));

const ifToCases = (cases, ifStatement) => {
    const {test, consequent, alternate} = ifStatement;
    if (checkSwitchableTest(test)) {
        if (consequent.type === 'BlockStatement') {
            cases.push(t.switchCase(test.right, [...consequent.body, t.breakStatement()]));
        } else {
            cases.push(t.switchCase(test.right, [consequent, t.breakStatement()]));
        }
    } else if (checkSwitchableMultiTest(test)) {
        cases.push(t.switchCase(test.left.right, []));
        if (consequent.type === 'BlockStatement') {
            cases.push(t.switchCase(test.right.right, [...consequent.body, t.breakStatement()]));
        } else {
            cases.push(t.switchCase(test.right.right, [consequent, t.breakStatement()]));
        }
    }
    if (alternate) {
        switch (alternate.type) {
            case 'BlockStatement':
                if (alternate.body[0].type === 'IfStatement') {
                    ifToCases(cases, alternate.body[0]);
                } else {
                    cases.push(t.switchCase(null, [...alternate.body, t.breakStatement()]));
                }
                break;
            case 'IfStatement': 
                ifToCases(cases, alternate);
                break;
            case 'ExpressionStatement':
                const {expression} = alternate;
                if (expression.type === 'LogicalExpression' && checkSwitchableTest(expression.left)) {
                    cases.push(t.switchCase(expression.left.right, [t.expressionStatement(expression.right), t.breakStatement()]));
                } else if (expression.type === 'ConditionalExpression' && checkSwitchableTest(expression.test)) {
                    cases.push(t.switchCase(expression.test.right, [t.expressionStatement(expression.consequent), t.breakStatement()]));
                    cases.push(t.switchCase(null, [t.expressionStatement(expression.alternate), t.breakStatement()]));
                } else {
                    cases.push(t.switchCase(null, [alternate, t.breakStatement()]));
                }
                break;
            default:
                cases.push(t.switchCase(null, [alternate, t.breakStatement()]));
                break;
        }
    }
};

const deobfuscate = async (url) => {
    const res = await fetch(url);
    const js = await res.text();
    const [_, decryptor, source] = js.match(/^(.*var a0b=function\([^}]*};)(.*)$/);
    eval(decryptor);
    const ast = parse(source.replace(/!!\[\]/g, ' true').replace(/!\[\]/g, ' false'));
    traverse(ast, {
        CallExpression: (path) => {
            const {callee: {name}, arguments} = path.node;
            if (name === 'a0b') {
                path.replaceWith(t.stringLiteral(a0b(arguments[0].value)));
            }
        },
        StringLiteral: (path) => {
            const {extra, value} = path.node;
            if (extra?.raw.indexOf('\\x') >= 0) {
                path.replaceWith(t.stringLiteral(value));
            }
        },
    });
    traverse(ast, {
        IfStatement: (path) => {
            const {test: {type, left, right, operator}, consequent, alternate} = path.node;
            if (type === 'BinaryExpression' && left.type === 'StringLiteral' && right.type === 'StringLiteral') {
                const replacement = (left.value === right.value) === (operator === '===') ? consequent : alternate;
                if (replacement.type === 'BlockStatement') {
                    path.replaceWithMultiple(replacement.body);
                } else {
                    path.replaceWith(replacement);
                }
            }
        },
        MemberExpression: (path) => {
            const {computed, property: {type, value}} = path.node;
            if (computed && type === 'StringLiteral' && isVarName(value)) {
                path.node.computed = false;
                path.node.property = t.identifier(value);
            }
        },
        ClassMethod: (path) => {
            const {computed, key: {type, value}} = path.node;
            if (computed && type === 'StringLiteral' && isVarName(value)) {
                path.node.computed = false;
                path.node.key = t.identifier(value);
            }
        },
        ObjectProperty: (path) => {
            const {key: {type, value}} = path.node;
            if (type === 'StringLiteral' && isVarName(value)) {
                path.node.key = t.identifier(value);
            }
        },
        SequenceExpression: (path) => {
            const {expressions} = path.node;
            switch (path.parent.type) {
                case 'ExpressionStatement':
                    path.replaceWithMultiple(createExpressionStatements(expressions));
                    break;
                case 'ReturnStatement':
                    path.parentPath.replaceWithMultiple([...createExpressionStatements(expressions.slice(0, -1)), t.returnStatement(expressions[expressions.length - 1])]);
                    break;
                case 'LogicalExpression':
                    const {left, right, operator} = path.parent;
                    if (path.parentPath.parentPath.type === 'ExpressionStatement' && path.node === right) {
                        path.parentPath.parentPath.replaceWith(t.ifStatement(operator === '&&' ? left : t.unaryExpression('!', left), t.blockStatement(createExpressionStatements(expressions))));
                    }
                    break;
                case 'ConditionalExpression':
                    const {test, consequent, alternate} = path.parent;
                    if (path.parentPath.parentPath.type === 'ExpressionStatement') {
                        const consequentStatement = consequent.type === 'SequenceExpression' ? t.blockStatement(createExpressionStatements(consequent.expressions)) : t.expressionStatement(consequent);
                        const alternateStatement = alternate.type === 'SequenceExpression' ? t.blockStatement(createExpressionStatements(alternate.expressions)) : t.expressionStatement(alternate);
                        path.parentPath.parentPath.replaceWith(t.ifStatement(test, consequentStatement, alternateStatement));
                    }
                    break;
            }
        },
    });
    traverse(ast, {
        IfStatement: (path) => {
            const {test} = path.node;
            if (checkSwitchableTest(test)) {
                const cases = [];
                ifToCases(cases, path.node);
                path.replaceWith(t.switchStatement(test.left, cases));
            }
        },
    });
    return beautify(generate(ast, {compact: true, jsescOption: {numbers: 'decimal', quotes: 'single', minimal: true}}).code);
};

const main = async () => {
    fs.writeFileSync('app-enter.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/app-enter.min.js'));
    fs.writeFileSync('app-player.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/app-player.min.js'));
};

main().then(() => {process.exit(0);});
