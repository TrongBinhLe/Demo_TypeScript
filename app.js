function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1 + " " + input2;
    }
    return result;
}
var combineAges = combine(30, 60);
console.log(combineAges);
var combineNames = combine("MAX", "Anana");
console.log(combineNames);
