//> Reduce...

//* REDUCE *//
/*
    1. Interate over each item of an array
    2. Returns a single instance eaither a number or object or an array
    3. can be a alternative of map and filter together
    4. accepts a callback and intial value (what type of value you want to return it can be number,array,obj)
    5. callback function accepts two parameters (accumulator,current) 
    > SYNTAX <
    const Result=array.reduce((accumulatoe,current)=>{
        - code
        return accumulator;
    },initialValue)
*/

const { person } = require("../data");
const totalSalary = person.reduce(
  (acc, curr) => {
    acc.employees.push({
      name: curr.name,
      salary: curr.salary,
    });
    acc.total += curr.salary;
    return acc;
  },
  { employees: [], total: 0 }
);

console.log(totalSalary);
