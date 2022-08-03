const names = [`sagar`, `moni`, `jojo`, `bobo`, `koko`];
const lastName = `pupu`;
const newArr = [];

for (let i = 0; i < names.length; i++) {
  //   newArr[i] = `${names[i]} ${lastName}`;
  newArr.push(`${names[i]} ${lastName}`);
}

console.log(newArr);
console.log(names.map((name) => `${name} ${lastName}`));
