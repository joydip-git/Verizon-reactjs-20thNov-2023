const objectInfo = {
    name: 'anil',
    id: 1,
    salary: 1000,
    projects: [
        {
            id: 1,
            name: 'CITA',
            startDate: new Date(2020, 11, 1),
            endDate: new Date(2025, 12, 16),
            teamMembers: [{
                name: 'sunil'
            }, {
                name: 'mahesh'
            }]
        }, {
            id: 2,
            name: 'SBCD',
            startDate: new Date(2020, 11, 1),
            endDate: new Date(2025, 12, 16),
            teamMembers: [{
                name: 'joy'
            }, {
                name: 'vinod'
            }]
        }
    ]
}

const { projects: [, { teamMembers: [, { name: memberName }] }] } = objectInfo
console.log(memberName)
// const arr = {
//     0: 10,
//     1: 20,
//     2: 30
// }

/*
const copyObject = {}

for (const propName in objectInfo) {
    //console.log(propName)
    const propValue = objectInfo[propName]
    //console.log(propName + ' : ' + propValue)
    copyObject[propName] = propValue
}
*/
//spread operator (...) => to shallow copy an object or an array
const copyObject = { ...objectInfo }
console.log(copyObject)

const numbers = [10, 20, 30, 40]
const copyNumbers = [...numbers, 100, 200]
console.log(copyNumbers)

//rest operator (...) => declare an array which can accept n numbers of parameters after the fixed number of arguments  as part of a function
//an array declared with rest operator can be only part of a function argument list
//this array should be the last of all the arguments in the list of arguments
//only one array in argument list can be declared with REST operator
function calculateAverage(name, ...marks) {
    let sum = 0
    let avg = 0
    for (const mark of marks) {
        sum += mark
    }
    avg = sum / marks.length
    return avg
}
calculateAverage('joydip', 40, 50, 60)
calculateAverage('anil', 70, 80)

// const pName = objectInfo.name
// const pId = objectInfo.id
// const pSalary = objectInfo.salary

//object destructuring
const { name: pName, id: pId } = objectInfo

console.log(pName, pId)

// const x = numbers[1]
// const y = numbers[3]

//array destructuring
const [, x, , y] = numbers
console.log(x, y)

