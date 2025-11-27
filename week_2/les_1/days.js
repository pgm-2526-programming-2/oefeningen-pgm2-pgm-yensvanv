const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

days.forEach((days) => {
  console.log(days);
});
//================================================================
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // 4 items here cus you pushed the forth (banana) into the array

const matrix = [
  [`11`, `17`, `30`],
  [`12`, `47`, `9`],
];

console.log(matrix[1][2]);

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
}

// see vid 9 min week 2 les 2
const num = [5, 8, 1, 3];
num.sort((a, b) => {
  return a - b;
});

// end of oef from vid in this js file

const numbersForOfs = [1, 2, 3, 4, 5];

for (const numbersForOf of numbersForOfs) {
  console.log(numbersForOf);
}

for (const numbersForOf of numbersForOfs) {
  console.log("hello");
}

const colors = ["red", "blue", "green", "yellow"];

colors.forEach((color, index) => console.log(`${index + 1}. ${color}`));

const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];
