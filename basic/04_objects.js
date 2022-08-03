//Objects
// Objects - Key/Value Pair method
// dot notation

const person = {
  name: `Sagar`,
  age: 22,
  isAdult: true,
  skills: ["programming", "c++", "js", "rest-api"],
  gretting() {
    //es6 jadu
    console.log(`Hello,I'm ${this.name}`);
  },
};
person.gretting();
console.log(person.skills);
console.log(person.age);
if (person.isAdult) console.log(`You can go...`);

//Challenge

const car = {
  make: `Mercedes`,
  model: `Escabor32z`,
  year: `2021`,
  colors: ["White", "Read", "Teal", "Blue"],
  hybrid: false,
  drive() {
    console.log(`Running..`);
  },
  stop() {
    console.log(`Car Stopped`);
  },
};

car.drive();
console.log(car.model, car.year, car.make);
console.log(car.colors[0]);
car.stop();
