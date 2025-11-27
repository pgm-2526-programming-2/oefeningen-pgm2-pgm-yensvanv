const games = [`Super Mario Bros`, `Zelda`, `n+ game`, `pokemon`];
const altgames = new Array();

Array.isArray(games);

const favoriteGames = [
  {
    name: "super Mario Bros",
    releaseYear: 1980,
  },
  {
    name: "zelda",
    releaseYear: 1984,
  },
];

const amountOfFavGames = favoriteGames.length;

games.length = 3;
const topThree = games;
games.length = 4;

const secondGame = games[1]; //start counting form 0 so 1 is second item this like is to just see how to get a item out of a list

const altSecondGame = games.at(); // at = []
const lastGame = games.at(-1); // just rewatch vid starts at min 27 or somthing for .at explination

const values = [
  `yens`,
  function () {
    console.log(`hello`); // able to place functions in arrays lol
  },
];

const stringArray = "[1, 2, 3, 4]";

const array = JSON.parse(stringArray);

console.log(typeof stringArray);

numbers.push(5);

const numberString = JSON.stringify(numbers);

console.log(stringArray, numbers, numberString);

const students = ["Nick", "Mert", "Yens"];
const people = ["Nick", "Mert", "Yens"];

const teacher = "Adriaan";
const friend = "Adriaan";

console.log(teacher === friend); // true
console.log(students === people); // false

function areArrayEqual(a, b) {
  const firstArray = JSON.stringify(a);
  const secondArray = JSON.stringify(b);
  console.log(firstArray === secondArray);
}

console.log(areArrayEqual(students, people));

const matrix = [
  [`0`, `0`, `0`, `0`],
  [`0`, `0`, `0`, `0`],
  [`0`, `0`, `0`, `0`],
  [`0`, `0`, `0`, `0`],
];

matrix[1][1];

const colors = ["red", "green", "blue"];

for (const color of collors) {
  console.log(color);
}

colors.forEach((colors) => {
  console.log(colors);
});

// see vid this is importand prob start at 1:35:00-1:40:00 this is start somewhere
colors.push("add somthing at the and of array");
colors.pop("winde verwijder ");
colors.unshift("add somthing at begin of array");
colors.shift("begin verwijder");

console.log("numbers", numbers);
const doubleNumbers = numbers.map((value, index) => {
  return "A";
});

console.log("doube numbers", doubleNumbers);

console.log("double Numbers as String ", doubleNumbers, join(`I`));

//again imports watch again
const numbersWithoutEight = doublenumbers.filter((value) => {
  return value != 8;
});

console.log(numbersWithoutEight);

numbers.some((number) => {
  return number === 8;
});

const sales = [4, 10, 6];

sales.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});

//loop 1: 0+4 -> 4
//loop 2: 4+10 -> 14
//loop 3: 14 +6 ->20

const products = [
  { name: "shirt", price: 20 },
  { name: "shoes", price: 50 },
  { name: "hat", price: 15 },
];

price.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});
