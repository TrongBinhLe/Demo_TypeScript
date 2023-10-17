
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbie1: ['Sports']},{ age: 20});
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if(element.length == 1){
        descriptionText = 'Got one element';
    } else if(element.length > 1){
        descriptionText = 'Got' + element.length + 'elements.'
    }
    return [element, descriptionText]
}

console.log(`[generic]: ${countAndDescribe('Hi there')}`);

