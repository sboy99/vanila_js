//! null vs undefined
//* both represent no value

// null: is set by developers to set that variable contains nothing
// undefined: is set by js if notthing is found

// major difference : when we perform arithmeric operation

// null: null is treated as 0
console.log(5 * null, 5 + null, 10 - null);

// undefined: js doesn't do implicit typecasting for undefined and retuns NaN(not a number)
console.log(5 * undefined, 5 + undefined, 10 - undefined);
