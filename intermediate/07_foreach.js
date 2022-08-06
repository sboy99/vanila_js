// powerfull array methods: accept a callback function and iterate through each and every item in the array
//> foreach
// map
// find
// filter

//* foreach: does not return a new array. It mutates orginal array
const { person } = require("../data");

person.forEach(function (employee) {
  console.log((employee.salary = parseInt((employee.salary * 1.1).toFixed(2)))); //salary incremented by 10%
});

console.log(person); // mutates orginal array
