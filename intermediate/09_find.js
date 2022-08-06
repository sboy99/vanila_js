// powerfull array methods: accept a callback function and iterate through each and every item in the array
// foreach
// map
//> find
// filter

//* FIND *//

/*
1. returns new single instance (single array element) 
2. finds an array element based on condition 
3. returns the first match
4. if nothing found return undefined 
*/

const { person } = require("../data");

//adding id using map..
const employees = person.map((emp, index) => {
  return { ...emp, id: index + 1 };
});

const empId3 = employees.find((emp) => emp.id === 3);
console.log(empId3);
