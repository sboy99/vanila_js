//Conditional Statement
//logical operator: <,>,<=,>=,==,!=,===,!==

let V = 4 < 7; // used in expression that return boolean values
console.log(V);

// Difference between ==,=== & !=,!==
// == checks only values
// === checks values and type

console.log(5 == "5"); // true , although number & string(in js theres an implicit typecaster for number)
console.log(5 === "5"); // false , as type mismatched

//* We can use conditional statement with "if else" statement and with While loop also...

// if Statement
if (5 !== 6) console.log(`check your number`);
// if else statement
if (5 === 6) console.log(`Equality satisfied`);
else console.log(`False value`);
// if else ladder (used in performing different actions on different conditions)
if (false) {
} else if (false) {
} else if (false) {
} else if (true) console.log(`code executed`);
else {
}
console.log(Boolean(-1)); // Only for zero it returns false and for non-zeros it returns true
