// powerfull array methods: accept a callback function and iterate through each and every item in the array
// foreach
//> map
// find
// filter

//* MAP *//

/*
1. returns a new array 
2. does not mutate or change orginal array
3. iterare over orginal array use array elements and perform operation over them and produce a new array
4. can not change array size i.e:returns same size of array
5. can change the value
*/

const person = require("./data");

// returns person salary
const personSalary = person.map((people) => people.salary + 500);

// returns person salary & object
const personNameSalary = person.map((emp) => {
  return { Name: emp.name, Salary: emp.salary };
});
console.log(person, personSalary, personNameSalary);
