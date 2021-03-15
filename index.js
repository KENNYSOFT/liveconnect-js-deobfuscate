#!/bin/node

const fetch = require('node-fetch');
const beautify = require('js-beautify');
const fs = require('fs');

const deobfuscate = async (url) => {
    const res = await fetch(url);
    const js = await res.text();
    try {
        eval(js);
    } catch (ignored) {
    }
    return beautify(beautify(js.replace(/a0b\('0x([0-9a-f]+)'\)/g, (_, g1) => `'${a0b(parseInt(g1, 16)).replace(/'/g, '\\\'')}'`))
            .replace(/    (get|set)\['([0-9a-z_-]*)'\]/ig, '$1 $2')
            .replace(/(\/[a-z]*|') \['([0-9a-z_-]*)'\]/ig, '$1.$2')
            .replace(/([^ ])\['([0-9a-z_-]*)'\]/ig, '$1.$2')
            .replace(/([^ ])\['([0-9a-z_-]*)'\]/ig, '$1.$2')
            .replace(/ \['bind'\]\(this\)/g, '.bind(this)')
            .replace(/ \['([0-9a-z_-]*)'\]/ig, ' $1')
            .replace(/\\x09/g, '\\t')
            .replace(/\\x0a/g, '\\n')
            .replace(/\\x0d/g, '\\r')
            .replace(/\\x27/g, '\\\'')
            .replace(/\\x([0-9a-f]{2})/g, (_, g1) => String.fromCharCode(parseInt(g1, 16)))
            .replace(/0x([0-9a-f]+)/g, (_, g1) => parseInt(g1, 16))
            .replace(/\nif \(Tira == ('[^']*')\) (var DCvi = '[^']*',\n *LUPn9 = LUEz1 \+ '[^']*');\n *else {/g, 'switch(Tira){case $1:$2;break;')
            .replace(/\n *if \(Tira == ('[^']*')\) (var DCvi = '[^']*',\n *LUPn9 = LUEz1 \+ '[^']*');\n *else {/g, 'case $1:$2;break;')
            .replace(/\n *if \(Tira == ('[^']*')\) (var DCvi = '[^']*',\n *LUPn9 = LUEz1 \+ '[^']*');(\n *})*/g, 'case $1:$2;break;}')
    );
};

const main = async () => {
    fs.writeFileSync('itg_e.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/itg_e.min.js'));
    fs.writeFileSync('itg_p.js', await deobfuscate('https://event.liveconnect.co.kr/static/js/dist/itg_p.min.js'));
};

main().then(() => {process.exit(0);});