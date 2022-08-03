// Loops...
// Repeatedly executes a block of code when an expression is true
//* for loop,while loop,do while loop

let i = 0;
// While
while (true) {
  console.log(++i);
  if (i === 10) break;
}
// Do While
do {
  console.log(`You have ${++i} dollar`);
} while (i < 10);

// For
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const fruits = [`Mango`, `Apple`, `Bananna`, `Grapes`, `Cherry`];
for (let fruit of fruits) console.log(fruit);
