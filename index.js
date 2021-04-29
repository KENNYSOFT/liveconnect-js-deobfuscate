#!/bin/node

const fetch = require('node-fetch');
const beautify = require('js-beautify');
const {parse} = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;
const isProperty = require('is-property');
const isVarName = require('is-var-name');
const fs = require('fs');

const checkSwitchableTest = (expression) => t.isBinaryExpression(expression, {operator: '=='}) && (t.isIdentifier(expression.left, {name: 'Tira'}) || t.isIdentifier(expression.left, {name: 'egl'})) && t.isStringLiteral(expression.right);

const checkSwitchableMultiTest = (expression) => t.isLogicalExpression(expression, {operator: '||'}) && checkSwitchableTest(expression.left) && checkSwitchableTest(expression.right);

const convertStatementToCaseConsequent = (statement) => t.isBlockStatement(statement) ? [...statement.body, t.breakStatement()] : [statement, t.breakStatement()];

const convertExpressionToCaseConsequent = (expression) => [t.expressionStatement(expression), t.breakStatement()];

const createExpressionStatements = (expressions) => expressions.map(expression => t.expressionStatement(expression));

const flattenExpressionToStatement = (expression) => t.blockStatement(t.isSequenceExpression(expression) ? createExpressionStatements(expression.expressions) : [t.expressionStatement(expression)]);

const ifToCases = (cases, ifStatement) => {
    const {test, consequent, alternate} = ifStatement;
    if (checkSwitchableTest(test)) {
        cases.push(t.switchCase(test.right, convertStatementToCaseConsequent(consequent)));
    } else if (checkSwitchableMultiTest(test)) {
        cases.push(t.switchCase(test.left.right, []));
        cases.push(t.switchCase(test.right.right, convertStatementToCaseConsequent(consequent)));
    } else {
        console.error('Unsupported test while constructing cases');
    }
    switch (alternate?.type) {
        case 'BlockStatement':
            if (t.isIfStatement(alternate.body[0])) {
                ifToCases(cases, alternate.body[0]);
            } else {
                cases.push(t.switchCase(null, convertStatementToCaseConsequent(alternate)));
            }
            break;
        case 'IfStatement': 
            ifToCases(cases, alternate);
            break;
        case 'ExpressionStatement':
            const {expression} = alternate;
            if (t.isLogicalExpression(expression) && checkSwitchableTest(expression.left)) {
                cases.push(t.switchCase(expression.left.right, convertExpressionToCaseConsequent(expression.right)));
            } else if (t.isConditionalExpression(expression) && checkSwitchableTest(expression.test)) {
                cases.push(t.switchCase(expression.test.right, convertExpressionToCaseConsequent(expression.consequent)));
                cases.push(t.switchCase(null, convertExpressionToCaseConsequent(expression.alternate)));
            } else {
                cases.push(t.switchCase(null, [alternate, t.breakStatement()]));
            }
            break;
        case undefined:
            break;
        default:
            console.error(`Unsupported type of alternate while constructing cases: ${alternate.type}`);
            break;
    }
};

const deobfuscate = async (url) => {
    const res = await fetch(url);
    const js = await res.text();
    const [, decryptor, source] = js.match(/^(.*var a0b=function\([^}]*};)(.*)$/);
    eval(decryptor);
    const ast = parse(source.replace(/!!\[\]/g, ' true').replace(/!\[\]/g, ' false'));
    traverse(ast, {
        CallExpression: (path) => {
            const {callee, callee: {name}, arguments} = path.node;
            if (t.isIdentifier(callee) && name === 'a0b') {
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
            const {test, test: {left, right, operator}, consequent, alternate} = path.node;
            if (t.isBinaryExpression(test) && t.isStringLiteral(left) && t.isStringLiteral(right)) {
                const replacement = (left.value === right.value) === (operator === '===') ? consequent : alternate;
                if (t.isBlockStatement(replacement)) {
                    path.replaceWithMultiple(replacement.body);
                } else {
                    path.replaceWith(replacement);
                }
            }
        },
        MemberExpression: (path) => {
            const {computed, property, property: {value}} = path.node;
            if (computed && t.isStringLiteral(property) && isProperty(value)) {
                path.node.computed = false;
                path.node.property = t.identifier(value);
            }
        },
        ClassMethod: (path) => {
            const {computed, key, key: {value}} = path.node;
            if (computed && t.isStringLiteral(key) && isProperty(value)) {
                path.node.computed = false;
                path.node.key = t.identifier(value);
            }
        },
        ObjectProperty: (path) => {
            const {key, key: {value}} = path.node;
            if (t.isStringLiteral(key) && isProperty(value)) {
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
                case 'ConditionalExpression':
                    // ignored
                    break;
                default:
                    console.error(`Unsupported type of parent while flattening SequenceExpression: ${path.parent.type}`);
                    break;
            }
        },
        LogicalExpression: (path) => {
            if (t.isExpressionStatement(path.parent) && (t.isLogicalExpression(path.node, {operator: '&&'}) || t.isLogicalExpression(path.node, {operator: '||'}))) {
                const {operator, left, right} = path.node;
                path.parentPath.replaceWith(t.ifStatement(operator === '&&' ? left : t.unaryExpression('!', left), flattenExpressionToStatement(right)));
            }
        },
        ConditionalExpression: (path) => {
            if (t.isExpressionStatement(path.parent)) {
                const {test, consequent, alternate} = path.node;
                path.parentPath.replaceWith(t.ifStatement(test, flattenExpressionToStatement(consequent), flattenExpressionToStatement(alternate)));
            }
        },
        CallExpression: (path) => {
            const {callee, callee: {params, body}, arguments} = path.node;
            if (t.isFunctionExpression(callee) && params.length === 1 && arguments.length === 1 && arguments[0]?.name === 'jQuery') {
                path.get('callee').scope.rename(params[0].name, '$');
                path.replaceWithMultiple(body.body);
            }
        },
        VariableDeclaration: (path) => {
            const {kind, declarations} = path.node;
            if (declarations.length > 1) {
                switch (path.parent.type) {
                    case 'Program':
                    case 'BlockStatement':
                        path.replaceWithMultiple(declarations.map(declaration => t.variableDeclaration(kind, [declaration])));
                        break;
                    case 'ForStatement':
                        // ignored
                        break;
                    default:
                        console.error(`Unsupported type of parent while flattening VariableDeclaration: ${path.parent.type}`);
                        break;
                }
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
        VariableDeclarator: (path) => {
            const {id, init} = path.node;
            if (t.isIdentifier(id) && t.isCallExpression(init)) {
                const {arguments, callee} = init;
                if (callee.name === '$' && arguments.length === 1 && t.isStringLiteral(arguments[0])) {
                    const value = arguments[0].value;
                    const varName = value.replace(/#/g, '').replace(/ /g, '__');
                    if (isVarName(varName)) {
                        path.parentPath.scope.rename(id.name, varName);
                    } else {
                        console.error(`Cannot construct variable name from jQuery selector: ${value}`);
                    }
                }
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
