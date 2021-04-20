#!/bin/node

const fetch = require('node-fetch');
const beautify = require('js-beautify');
const {parse} = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const fs = require('fs');

const removeMeaninglessBranch = (source) => {
    const ast = parse(source);
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
        }
    });
    return generate(ast, {compact: true, jsescOption: {numbers: 'decimal'}}).code;
}

const deobfuscate = async (url) => {
    const res = await fetch(url);
    const js = await res.text();
    const [_, decryptor, source] = js.match(/^(.*var a0b=function\([^}]*};)(.*)$/);
    eval(decryptor);
    return beautify(removeMeaninglessBranch(beautify(source.replace(/a0b\('0x([0-9a-f]+)'\)/g, (_, g1) => `'${a0b(parseInt(g1, 16)).replace(/'/g, '\\\'')}'`))
            .replace(/    (get|set)\['([0-9a-z_-]*)'\]/ig, '$1 $2')
            .replace(/(\/[a-z]*|') \['([0-9a-z_-]*)'\]/ig, '$1.$2')
            .replace(/([^ ])\['([0-9a-z_-]*)'\]/ig, '$1.$2')
            .replace(/([^ ])\['([0-9a-z_-]*)'\]/ig, '$1.$2')
            .replace(/ \['bind'\]\(this\)/g, '.bind(this)')
            .replace(/\} \['([0-9a-z_-]*)'\]/ig, '} $1')
            .replace(/\\x09/g, '\\t')
            .replace(/\\x0a/g, '\\n')
            .replace(/\\x0d/g, '\\r')
            .replace(/\\x27/g, '\\\'')
            .replace(/\\x([0-9a-f]{2})/g, (_, g1) => String.fromCharCode(parseInt(g1, 16)))
            .replace(/!!\[\]/g, 'true')
            .replace(/!\[\]/g, 'false')
            .replace(/\nif \(Tira == ('[^']*')\) (var DCvi = '[^']*'(,\n *LUPn9 = LUEz1 \+ '[^']*')?);\n *else {/g, 'switch(Tira){case $1:$2;break;')
            .replace(/\n *if \(Tira == ('[^']*')\) (var DCvi = '[^']*'(,\n *LUPn9 = LUEz1 \+ '[^']*')?);\n *else {/g, 'case $1:$2;break;')
            .replace(/\n *if \(Tira == ('[^']*')\) (var DCvi = '[^']*'(,\n *LUPn9 = LUEz1 \+ '[^']*')?);(\n *})*/g, 'case $1:$2;break;}')
    ));
};

const main = async () => {
    fs.writeFileSync('app-enter.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/app-enter.min.js'));
    fs.writeFileSync('app-player.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/app-player.min.js'));
};

main().then(() => {process.exit(0);});
