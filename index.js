#!/bin/node

const fetch = require('node-fetch');
const beautify = require('js-beautify');
const {parse} = require('@babel/parser');
const fs = require('fs');

const getBody = (ifSrc, node) => {
    if (node.type === 'BlockStatement') return ifSrc.substring(node.start + 1, node.end - 1);
    else return ifSrc.substring(node.start, node.end);
}

const removeMeaninglessBranch = (src) => {
    while (true) {
        const match = src.match(/if \('[a-z]{5}' [!=]== '[a-z]{5}'\)/i);
        if (!match) break;

        let ifSrc;
        let ifStatement;
        try {
            parse(src.substring(match.index), {errorRecovery: true});
        } catch (err) {
            ifSrc = src.substring(match.index, match.index + err.pos);
            ifStatement = parse(ifSrc, {errorRecovery: true}).program.body[0];
        }

        const consequent = getBody(ifSrc, ifStatement.consequent).trim();
        const alternate = getBody(ifSrc, ifStatement.alternate).trim();

        const {left: {value: left}, right: {value: right}, operator} = ifStatement.test;
        src = src.substring(0, match.index) + ((left === right) === (operator === '===') ? consequent : alternate) + src.substring(match.index + ifStatement.end);
    }
    return src;
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
            .replace(/0x([0-9a-f]+)/g, (_, g1) => parseInt(g1, 16))
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
