"use strict";
console.log("Trong Binh");
const userName = "Trong Binh Le ";
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", () => {
        console.log("Cliked");
    });
}
const hobbies = ["Sports", "Watching machine"];
const activieHobbies = ["Hikings"];
activieHobbies.push(...activieHobbies);
const people = {
    name: "Trong Binh",
    age: 23,
};
const copiedPeople = Object.assign({}, people);
function add(...numbers) {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}
function add1(...numbers) {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
}
const addedNumbers = add(1, 2, 3, 4.6);
const addedNumbers1 = add1(3, 4, 5);
console.log(addedNumbers);
console.log(addedNumbers1);
//# sourceMappingURL=app.js.map