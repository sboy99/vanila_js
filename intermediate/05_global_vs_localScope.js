//*global scope vs local scope*//

//> global scope: variable that are declared outside of curly braces are in global scope
// global variables can be accessed from anywhere of the code
// although it can cause namely collisions and can be modified from anywhere

//> local scope: variables that are declared inside of curly braces are in local scope
//  they are confied with those curlies and can't be accessed outside (not var variables)

let name = `sagar`; //global
(function () {
  console.log(name); // throws error
  const name = `Nobita`; //local scope
  console.log(name); //Nobita
  special = `accessable`; //global
})();

console.log(name, special);
