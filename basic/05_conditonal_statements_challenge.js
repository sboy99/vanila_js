const person1 = {
  name: `Sagar`,
  age: 22,
  status: `tourist`,
};
const person2 = {
  name: `Monisha`,
  age: 21,
  status: `resident`,
};

const isAllowed = function (person) {
  if (person?.age > 18 && person?.status === `resident`)
    console.log(`${person?.name} is allowed`);
  else console.log(`${person?.name} is not allowed`);
};

isAllowed(person1);
isAllowed(person2);
