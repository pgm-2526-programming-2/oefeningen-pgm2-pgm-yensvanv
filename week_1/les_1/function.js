function sum(a, b) {
  return a + b;
}

const age = 20;

console.log(sum(age, 1));

console.log(20);

//make now a multiply and divison of this

//end oef multiply

const name = `yens`;
//under here are anonymous functions
const devision = () => {};
const multiplier = function () {};
//end ====

// small oef
const students = [`yme`, `arne`, `mert`];

function selectRandomStudent(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(selectRandomStudent(students));

//end small oef

//new oef see how it whas done in les 1 pgm 2 time 1:30:00 or somthing
function showMessage() {
  console.log(`Answer Checher Message `);
}

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback(`✅`);

    return true;
  }
  // to know why not type else see vid les 1 time 1:33:00
  callback(`❌`);

  return false;
}

checkAnswer(`goed`, `bad`, showMessage);
