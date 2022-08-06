// Array Method Challenges //
const { students } = require("./data");

//> Add role=`student` to every student object
// const updatedStudents = students.map((student) => {
//   return { ...student, role: `student` };
// });

const updatedStudents = students.map((student) => {
  student.role = `student`;
  return student;
});

const classAdded = updatedStudents.reduce((acc, curr) => {
  acc.push({ ...curr, class: `V` });
  return acc;
}, []);

// console.log(classAdded);

//> Filter array and return only scores >= 80

const highScore = students.filter((student) => student.score >= 80);
// console.log(highScore);

//> Find specific id in array

const specificId = students.find((student) => student.id === 4);
// console.log(specificId);

//> calculate average score

const averageScore =
  students.reduce((acc, curr) => {
    acc += curr.score;
    return acc;
  }, 0) / students.length;
// console.log(averageScore);

//> Survey on favorite subject

const favoriteSubjects = students.reduce((acc, curr) => {
  acc[curr.favoriteSubject]
    ? (acc[curr.favoriteSubject] += 1)
    : (acc[curr.favoriteSubject] = 1);
  return acc;
}, {});
console.log(favoriteSubjects);
