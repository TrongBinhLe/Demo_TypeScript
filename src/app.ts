console.log("Trong Binh");
const userName = "Trong Binh Le ";
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    console.log("Cliked");
  });
}

//Spread the operation
const hobbies = ["Sports", "Watching machine"];
const activieHobbies = ["Hikings"];
activieHobbies.push(...activieHobbies);

const people = {
  name: "Trong Binh",
  age: 23,
};

const copiedPeople = { ...people };

//Rest Parameters
//1. Dynamic paramester
function add(...numbers: number[]) {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
}
//2. Specific paremester
function add1(...numbers: [number, number, number]) {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
}

const addedNumbers = add(1, 2, 3, 4.6);
const addedNumbers1 = add1(3, 4, 5);
console.log(addedNumbers);
console.log(addedNumbers1);
