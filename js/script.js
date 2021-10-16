function padString( anyStr, strLength, specSymb, isNeedSymb = true ) {

    const regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    if ( ( typeof( anyStr ) !== `string` ) ) return console.log(`First argument must be 'string'`);
    if ( isNaN( strLength ) === true ) return console.log(`Second argument must be a number `);
    if ( strLength <= anyStr.length )  {
         specSymb = null;
    } else if ( ( regex.test( specSymb ) !== true ) || ( specSymb.length !== 1 ) ) {
        return console.log(`Need to specify 3d argument in one special symbol`); 
    };

    const necessaryPart = anyStr.substr( 0, strLength );

    if (anyStr.length < strLength) {
        const tail = specSymb.repeat( strLength - anyStr.length );
        return isNeedSymb === true ? console.log(necessaryPart + tail) : console.log(tail + necessaryPart);
    } else {
        return console.log(necessaryPart);
    };
};

padString(`hello`, 8, `*`);
padString(`hello`, 6, `*`, false);
padString(`hello`, 2);


// Функция до упрощения

// function padString( anyStr, strLength, specSymb, isNeedSymb = true ) {

//     let regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

//     if ( ( typeof( anyStr ) !== `string` ) ) return console.log(`First argument must be 'string'`);
//     if ( isNaN( strLength ) === true ) return console.log(`Second argument must be a number `);
//     if ( strLength <= anyStr.length )  {
//          specSymb = null;
//     } else if ( ( regex.test( specSymb ) !== true ) || ( specSymb.length !== 1 ) ) {
//         return console.log(`Need to specify 3d argument in one special symbol`); 
//     };
//     const resultWord = anyStr.substr( 0, strLength );

//     if ( ( anyStr.length < strLength ) && ( isNeedSymb === true ) )  {
//         resultWord = resultWord + specSymb.repeat( strLength - anyStr.length );
//         return console.log(resultWord);
//     } else if ( ( anyStr.length < strLength ) && ( isNeedSymb === false ) ) {
//         resultWord = specSymb.repeat( strLength - anyStr.length ) + resultWord;
//         return console.log(resultWord);
//     } else {
//         return console.log(resultWord);
//     };
// };


// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:
// 1. строку
// 2. число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// 3. символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// 4. параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, 
// и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’). 
// Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.
// Результат вызова функции нужно вывести в консоль — после завершения функции.

// Например:
// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***
// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello
// Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки,
// нужно строку обрезать при помощи метода substr
// Дополнительные материалы:

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// https://learn.javascript.ru/function-basics

// https://learn.javascript.ru/ifelse

