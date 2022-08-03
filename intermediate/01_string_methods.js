// String properties & methods...

const text = ` Random text..`;
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(5));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf(`te`));
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("random"));
console.log(text.includes(`ran`));
console.log(text.slice(4, -1));
