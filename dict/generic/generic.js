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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('MAX');
textStorage.addItem('MAnu');
textStorage.removeItem('MAX');
console.log('Generic class:', textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
const mazObject = { name: 'MAZ' };
objStorage.addItem(mazObject);
objStorage.addItem({ name: 'ZORO' });
objStorage.removeItem(mazObject);
console.log('Generic class object:', objStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUtil = date;
    return courseGoal;
}
//# sourceMappingURL=generic.js.map