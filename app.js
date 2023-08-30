function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1 + " " + input2;
    }
    return result;
}
var combineAges = combine(30, 60, "as-number");
console.log(combineAges);
var combineNames = combine("MAX", "Anana", "as-text");
console.log(combineNames);
var combineAgeWithString = combine("23", "232", "as-text");
console.log(combineAgeWithString);
var promise4 = new Promise(function (resolve, reject) {
    var result = false;
    if (result) {
        setTimeout(function () {
            resolve("Resolve state"), 1000;
        });
    }
    else {
        reject("Rejected state");
    }
});
// Understading promise
promise4.then(function (value) {
    console.log("This will run as it is a resolved promise, The resolved value is", value);
});
promise4.catch(function (reason) {
    console.log("This will not run as it is a resolved promise", reason);
});
// Understanding async-await
