// Map

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for(let vegetable of recipeMap.keys()){
    console.log(vegetable);
}

for(let amount of recipeMap.values()){
    console.log(amount);
}

for(let entry of recipeMap.entries()){
    console.log(entry)
}

let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));

console.log(Object.entries(obj))
console.log(map.get('name'));

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
])
console.log(prices.orange)

//Set

let a = new Set();

let john = { name : "John"};
let pete = { name : "Pete"};
let mary = { name : "Mary"};

a.add(john);
a.add(pete);
a.add(mary);
a.add(john);

console.log("length of set: " + a.size);

let set = new Set(["oranges", "apples", "bananas"]);


