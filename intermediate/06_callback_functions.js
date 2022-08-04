//* Callback fn() & high order fn() *//

// high order fn(): those functions accept another function as an argument
// callback fn(): those functions are passed to another function as an parameter anf gets called inside high order fn()

// callback fn()
function morning(name) {
  return `Good Morning ${name.toUpperCase()},`;
}
function afterNoon(name) {
  return `Good Afternoon ${name.repeat(2)},`;
}

// high order fn()
const greet = function (to, what) {
  const Iam = `Sagar`;
  console.log(`${what(to)} I'm ${Iam} nice to meet you`);
};

greet(`bobo`, morning);
greet(`susy`, afterNoon);
