const numbers = [1, 2]
function* iterateValues() {
    for (const value of numbers) {
        yield value
    }
}

const generatorObject = iterateValues()

const op1 = generatorObject.next()
console.log(op1.value, op1.done)

const op2 = generatorObject.next()
console.log(op2.value, op2.done)

const op3 = generatorObject.next()
console.log(op3.value, op3.done)