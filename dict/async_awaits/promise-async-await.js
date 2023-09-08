"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let unKnowType;
unKnowType = Math.random;
unKnowType = 1;
unKnowType = {};
let anyType;
anyType = Math.random;
anyType = 1;
anyType = {};
let sTringValue = "Le Trong Binh";
if (typeof unKnowType == "string") {
    unKnowType = sTringValue;
}
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1 + " " + input2;
    }
    return result;
}
const combineAges = combine(30, 60, "as-number");
console.log(combineAges);
const combineNames = combine("MAX", "Anana", "as-text");
console.log(combineNames);
const combineAgeWithString = combine("23", 234, "as-text");
console.log(combineAgeWithString);
const promise4 = new Promise((resolve, reject) => {
    const result = false;
    if (result) {
        setTimeout(function () {
            resolve("Resolve state"), 1000;
        });
    }
    else {
        reject("Rejected state");
    }
});
promise4.then(function (value) {
    console.log("This will run as it is a resolved promise, The resolved value is", value);
});
promise4.catch(function (reason) {
    console.log("This will not run as it is a resolved promise", reason);
});
function showAvatar() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("/article/promise-chaining/user.json");
        let user = yield response.json();
        let githubResponse = yield fetch(`https://api.github.com/users/${user.name}`);
        let githubUser = yield githubResponse.json();
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        yield new Promise((resolve, reject) => setTimeout(resolve, 3000));
        img.remove();
        return githubUser;
    });
}
showAvatar().catch(error => {
    console.log(error);
});
//# sourceMappingURL=promise-async-await.js.map