//video oef start around 1h8min

const student = Symbol("yens");
const person = Symbol("yme");

console.log(
  student,
  student.toString(),
  student.description,
  student === person
);

// uppercase bariables - waarde die nooit zullen veranderen & je gebruik die in je heel project. "optie" dit moet niet
const STATES = {
  LOADING: "laden",
  LOADED: "laden",
};

console.log(STATES.LOADED === STATES.LOADING);
