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

const copiedPeople = { ...people };
