function padString( anyStr, strLength, specSymb, isNeedSymb = true ) {

    if (typeof(anyStr) !== 'string') throw new Error(`First argument error`);
    if (typeof(strLength) !== 'number') throw new Error(`Second argument error`);;
    if (strLength <= anyStr.length) specSymb = null;
    else if (typeof(specSymb) !== `string` || specSymb.length !== 1) throw new Error(`Need to specify 3d argument in 'string' symbol`);
    
    const necessaryPart = anyStr.substr( 0, strLength );

    if (anyStr.length < strLength) {
        const tail = specSymb.repeat( strLength - anyStr.length );
        return isNeedSymb  ? necessaryPart + tail : tail + necessaryPart;
    } 
        return necessaryPart;
};

console.log(padString(`hello`, 8, `*`));
console.log(padString(`hello`, 6, `*`, false));
console.log(padString(`hello`, 2));
