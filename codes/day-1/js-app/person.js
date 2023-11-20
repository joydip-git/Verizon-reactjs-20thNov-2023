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

const anilPerson = new Trainer('anil', 2, 2000, 'Angular')

const value = 100
//value = 200
const people = [joyPerson, anilPerson]
//const people = new Array(joyPerson, anilPerson)
//people = []
people.push(
    new Trainer('sunil', 3, 3000, 'Node JS'),
    new Trainer('mahesh', 4, 4000, 'HTML')
)
//people.splice(1, 1, new Trainer())

//console.log(people)

for (let index = 0; index < people.length; index++) {
    const p = people[index];
    console.log(p.show())
}

for (const p of people) {
    console.log(p.show())
}

for (const index in people) {
    const p = people[index]
    console.log(p.show())
}

const copy = people.slice(0, 3)
console.log(copy)



