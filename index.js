#!/bin/node

const fetch = require('node-fetch');
const beautify = require('js-beautify');
const {parse} = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;
const fs = require('fs');

const deobfuscate = async (url) => {
    const res = await fetch(url);
    const js = await res.text();
    const [_, decryptor, source] = js.match(/^(.*var a0b=function\([^}]*};)(.*)$/);
    eval(decryptor);
    const ast = parse(source);
    traverse(ast, {
        CallExpression: (path) => {
            const {callee: {name}, arguments} = path.node;
            if (name === 'a0b') {
                path.replaceWith(t.stringLiteral(a0b(arguments[0].value)));
            }
        },
        StringLiteral: (path) => {
            if (path.node.extra?.raw.indexOf('\\x') >= 0) {
                path.replaceWith(t.stringLiteral(path.node.value));
            }
        },
    });
    traverse(ast, {
        IfStatement: (path) => {
            const {test: {left, right, operator}, consequent, alternate} = path.node;
            if (left?.type === 'StringLiteral' && right?.type === 'StringLiteral') {
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
            if (computed && type === 'StringLiteral' && value.match(/^[0-9a-z_-]*$/i)) {
                path.node.computed = false;
                path.node.property = t.identifier(value);
            }
        },
        ClassMethod: (path) => {
            const {computed, key: {type, value}} = path.node;
            if (computed && type === 'StringLiteral' && value.match(/^[0-9a-z_-]*$/i)) {
                path.node.computed = false;
                path.node.key = t.identifier(value);
            }
        },
    });
    return beautify(beautify(generate(ast, {compact: true, jsescOption: {numbers: 'decimal', quotes: 'single', minimal: true}}).code)
            .replace(/!!\[\]/g, 'true')
            .replace(/!\[\]/g, 'false')
            .replace(/\nif \(Tira == ('[^']*')\) (var DCvi = '[^']*');\n *else {/g, 'switch(Tira){case $1:$2;break;')
            .replace(/\n *if \(Tira == ('[^']*')\) (var DCvi = '[^']*');\n *else {/g, 'case $1:$2;break;')
            .replace(/\n *if \(Tira == ('[^']*')\) (var DCvi = '[^']*');(\n *})*/g, 'case $1:$2;break;}')
    );
};

const main = async () => {
    fs.writeFileSync('app-enter.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/app-enter.min.js'));
    fs.writeFileSync('app-player.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/app-player.min.js'));
};

main().then(() => {process.exit(0);});
