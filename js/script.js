function padString( anyStr, strLength, specSymb, isNeedSymb = true ) {

    let regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    if ( ( typeof( anyStr ) !== `string` ) ) return console.log(`First argument must be 'string'`);
    if ( isNaN( strLength ) === true ) return console.log(`Second argument must be a number `);
    if ( strLength <= anyStr.length )  {
         specSymb = null;
    } else if ( ( regex.test( specSymb ) !== true ) || ( specSymb.length !== 1 ) ) {
        return console.log(`Need to specify 3d argument in one special symbol`); 
    };
    let resultWord = anyStr.substr( 0, strLength );

    if ( ( anyStr.length < strLength ) && ( isNeedSymb === true ) )  {
        resultWord = resultWord + specSymb.repeat( ( strLength - anyStr.length ) );
        return console.log(resultWord);
    } else if (( anyStr.length < strLength ) && ( isNeedSymb === false )) {
        resultWord = specSymb.repeat( ( strLength - anyStr.length ) ) + resultWord;
        return console.log(resultWord);
    } else {
        return console.log(resultWord);
    };
}
padString(`hello`, 2);


