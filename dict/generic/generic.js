"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbie1: ['Sports'] }, { age: 20 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length == 1) {
        descriptionText = 'Got one element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got' + element.length + 'elements.';
    }
    return [element, descriptionText];
}
console.log(`[generic]: ${countAndDescribe('Hi there')}`);
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'MAZ' }, 'name');
//# sourceMappingURL=generic.js.map