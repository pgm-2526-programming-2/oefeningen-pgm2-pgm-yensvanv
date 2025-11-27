const students = ["Nick", "Mert", "Yens"];
const people = ["Nick", "Mert", "Yens"];

const teacher = "Adriaan";
const friend = "Adriaan";

console.log(teacher === friend); // true
console.log(students === people); // false

function areArrayEqual(a, b) {
  const firstArray = JSON.stringify(a);
  const secondArray = JSON.stringify(b);

  return firstArray === secondArray;
}

// shorter form
function areArrayEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// other form see vid min 1:24:00

function areArrayEqual(a, b) {
  if (a.length != b.lenght) {
    return false;
  }
}

console.log(areArrayEqual(students, people));

const products = [
  { name: "shirt", price: 20 },
  { name: "shoes", price: 50 },
  { name: "hat", price: 15 },
];

const totalProductionPrice = products.reduce(
  (prevReturedPrice, producObject) => {
    return prevReturedPrice + producObject.price;
  },
  0
);

console.log(totalProductionPrice);



//finish this when home in vid eplinations of whole think begins at maybe 2:40:00
const students = [
    {name:"Alice", age: 25, subject:"math"}
    {name:"bob", age: 30, subject:"Science"}
    {name:"Charlie", age: 28, subject:"History"}
]


cosnt subject = students.reduce((map, student)=>{
    const subject = student.subject;
    map[subjec] = map [subject] || [];
    map[subject].push
})