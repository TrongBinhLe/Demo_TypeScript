function combine(
  input1: string | number,
  input2: string | number,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1 + " " + input2;
  }
  return result;
}

const combineAges = combine(30, 60, "as-number");
console.log(combineAges);

const combineNames = combine("MAX", "Anana", "as-text");
console.log(combineNames);

const combineAgeWithString = combine("23", "232", "as-text");
console.log(combineAgeWithString);

const promise4 = new Promise((resolve, reject) => {
  const result = false;
  if (result) {
    setTimeout(function () {
      resolve("Resolve state"), 1000;
    });
  } else {
    reject("Rejected state");
  }
});

// Understading promise
promise4.then(function (value) {
  console.log(
    "This will run as it is a resolved promise, The resolved value is",
    value
  );
});

promise4.catch(function (reason) {
  console.log("This will not run as it is a resolved promise", reason);
});

// Understanding async-await
async function showAvatar() {
  // read our JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar().catch(error => {
  console.log(error)
});
