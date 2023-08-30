function combine(input1: string | number, input2: string | number) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1 + " " + input2;
  }
  return result;
}

const combineAges = combine(30, 60);
console.log(combineAges);

const combineNames = combine("MAX", "Anana");
console.log(combineNames);
