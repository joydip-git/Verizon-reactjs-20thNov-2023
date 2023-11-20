//3. using class keyword
class Person {
    // #name
    // #id
    // #salary
    constructor(name, id, salary) {
        // this.#name = name
        // this.#id = id
        // this.#salary = salary
        this.name = name
        this.id = id
        this.salary = salary
    }
    /*
    get name() {
        return this.#name
    }
    set name(value) {
        this.#name = value
    }
    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }
    get salary() {
        return this.#salary
    }
    set salary(value) {
        this.#salary = value
    }
    */
    show() {
        // return this.#name + ' ' + this.#salary + ' ' + this.#id
        return this.name + ' ' + this.salary + ' ' + this.id
    }
}

class Trainer extends Person {
    //#subject
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        //this.#subject = subject
        this.subject = subject
    }
    /*
    get subject() {
        return this.#subject
    }
    set subject(value) {
        this.#subject = value
    }
    */
    show() {
        // return super.show() + ' ' + this.#subject
        return super.show() + ' ' + this.subject
    }
}

const joyPerson = new Trainer('joydip', 1, 1000, 'React JS')
joyPerson.subject = 'JavaScript'
console.log(joyPerson.show())


const anilPerson = new Trainer('anil', 2, 2000, 'Angular')
console.log(anilPerson.show())