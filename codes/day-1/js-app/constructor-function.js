//2. constructor function technique
function person(name, id, salary) {
    this.personName = name
    this.personId = id
    this.personSalary = salary
    this.show = function () {
        return this.personId + ' ' + this.personName + ' ' + this.personSalary
    }
    //return this
}
const joyPerson = new person('joydip', 1, 1000)
console.log(joyPerson.show())

const anilPerson = new person('anil', 2, 2000)
console.log(joyPerson.show())

// function foo() {
//     //local variables
//     var x = 100
//     let y = 200

//     //object data
//     this.z = 300
// }

// new foo()

