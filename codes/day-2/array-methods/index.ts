//creating custom data type in TS
type myType = boolean | string | null | undefined
type someType = {
    id: number,
    name: string
}
function sample(arg: someType): someType {
    const copy = { ...arg }
    copy.name = 'sunil'
    return copy
}

sample({ id: 1, name: 'anil' })

//function typification

//to this "invoke "function you can pass another function, as argument, of the following nature:
//the function should accept one argument of tyep "string"
//the function should not return anything
type invokeArgType = (arg: string) => string
function invoke(fnRef: invokeArgType, value: string) {
    fnRef(value)
}
function foo(val: string): string {
    return val + ' joydip'
}
invoke(foo, 'hello...')

// const multiply = function (a: number, b: number) {
//     return a * b
// }
const multiply = (a: number, b: number) => a * b
const divide = (a: number, b: number) => console.log(a / b)