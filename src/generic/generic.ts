
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


//Using keyof to define T is key value of T Objet
function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

extractAndConvert({name: 'MAZ'}, 'name'); // keyof return key of propeties,

// Generic Class 

class DataStorage <T extends string | boolean | object| number>{
    private readonly data: T[] = [];

    addItem(item: T) { 
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1){
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data];
    }
}


const textStorage = new DataStorage<string>();
textStorage.addItem('MAX');
textStorage.addItem('MAnu');
textStorage.removeItem('MAX');
console.log('Generic class:', textStorage.getItems())


const numberStorage = new DataStorage<number>();
const objStorage = new DataStorage<object>();
const mazObject = {name: 'MAZ'}
objStorage.addItem(mazObject);
objStorage.addItem({name: 'ZORO'});
objStorage.removeItem(mazObject);

console.log('Generic class object:', objStorage.getItems());

// Generic Utility Types/ Union
interface CourseGoal {
    title: string;
    description: string;
    completeUtil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal : Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUtil = date;

    return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['MAx', 'Anna'];
// names.push('zoro'); error whens usng to push strong in names
