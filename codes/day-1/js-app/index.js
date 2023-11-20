var nameValue = 'verizon'
var intValue = 12
var floatValue = 12.34
var boolValue = true

//intValue = 'joydip'

console.log(nameValue, typeof nameValue)
console.log(intValue, typeof intValue)
console.log(floatValue, typeof floatValue)
console.log(boolValue, typeof boolValue)

var a //=undefined
console.log(a, typeof a)

var b = a + 10 //NaN (Not a Number)
console.log(b, typeof b)

var res = 10 / 0
console.log(res, typeof res)

var ref = null
console.log(ref, typeof ref)

//1. object literal syntax
ref = {
    //value properties
    name: 'joydip',
    isTrainer: true,
    salary: 1000,

    //functional properties
    show: function () {
        return this.name + ' ' + this.salary + (this.isTrainer ? 'trainer' : 'trainee')
    },
    sayBye: function () {
        console.log('say bye to ' + this.name)
    }
}
console.log(ref, typeof ref)

//accessing value members of an object
//1. using dot operator (.)
console.log(ref.name)
//2. using indexer
console.log(ref['salary'])

//accessing functional members of an object
console.log(ref.show())
//console.log(ref['show']())

//expand any existing object
//ref.location = 'Bangalore'
ref['location'] = 'Bangalore'
// ref.sayHi = function () {
//     console.log('say hi to ' + this.name)
// }
ref['sayHi'] = function () {
    console.log('say hi to ' + this.name)
}
console.log('expanded object')

console.log(ref)
ref.sayHi()

console.log(add(12, 13))
//function declaration (declaration function can be called before the declaration itself)
function add(a, b) {
    return a + b
}
console.log(add('joydip', 'mondal'))


//console.log(subtract(12, 3))
//function expression (expression function can not be called before the expression itself)
var subtract = function (a, b) {
    return a - b
}
console.log(subtract(12, 3))

