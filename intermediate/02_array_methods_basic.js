let names = [`monisha`, `sagar`, `sudipto`, `super`];
let lastNames = [`bera`, `apple`, `burrito`];

//length
console.log(names.length);

//last item
console.log(names[names.length - 1]);

//concat
let allNames = names.concat(lastNames);
console.log(allNames);

//reverse array
console.log(allNames.reverse());

//unshift : adds value to the begining of the array
allNames.unshift(`bobogu`);
console.log(allNames);

//shift : removes value from the begining of the array
allNames.shift();
console.log(allNames);

// push : add a value to the end of the array
allNames.push(`bobogu`);
console.log(allNames);

// pop : removes a value from the end of the array
allNames.pop();
console.log(allNames);

//splice : removes items from given index.
// Accept two arguments
// first: index of the item to remove
// second: no of items to delete followed by index

allNames.splice(2, 2);
console.log(allNames);
