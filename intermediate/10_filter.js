// powerfull array methods: accept a callback function and iterate through each and every item in the array
// foreach
// map
// find
//> filter

//* FILTER *//

/*
1. returns new array
2. does not mutate orginal array
3. return elements based on conditions 
4. returned array size may differ from orginal one it might be empty if no condition get matched
5. does not change element value
*/

const { person } = require("../data");

const higherSalaryPeople = person.filter((emp) => emp.salary > 55000);
console.log(higherSalaryPeople);
