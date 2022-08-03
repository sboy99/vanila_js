// reference vs value

//* Shallow Copy
const person = { name: `Sagar` };
const person2 = person; //person2 is referencing person obj

console.log(person2);
person.name = `Suman`;
console.log(person2);

//* Deep Copy
const person3 = { ...person }; //person3 gets actual values of person object not referencing same memory block
console.log(person3);
person.name = `Monisha`;
console.log(person3);
