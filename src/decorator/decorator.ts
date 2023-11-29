function Logger(logString: string) {
    return function(constr: Function){
        console.log('Logging.....')
        console.log(constr)
    }
}

@Logger('LOGGING - PERSON')
class Person1 {
    name = 'TrBinh'

    constructor() {
        console.log('Creating person object....');
    }
}

const pers = new Person1()
