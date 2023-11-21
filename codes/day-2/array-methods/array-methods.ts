//function filterElements<E>(arr: E[], logicFnRef: (arg: E) => boolean): E[] {

// type logicFnType<E> = (arg: E) => boolean
// function filterElements<E>(arr: E[], logicFnRef: logicFnType<E>): E[] {
//     //filter all the even numbers and return an array with those even numbers
//     const output: E[] = []
//     for (const element of arr) {
//         const status = logicFnRef(element)
//         if (status)
//             output.push(element)
//     }
//     return output
// }

interface Post {
    id: number;
    title: string;
    body: string;
}

const posts: Post[] = [{ id: 1, title: 'abcd', body: 'xvaxjvhj' }, { id: 2, title: 'mnop', body: 'asvasjxvhas' }, { id: 3, title: 'asfgda', body: 'asxfhgsaxhas' }]
posts.sort(
    (current: Post, next: Post) => current.title.toLocaleLowerCase().localeCompare(next.title.toLocaleLowerCase())
)

console.log(posts)

// const containsLetterA: logicFnType<Post> = function (p: Post) {
//     return p.title.toLocaleLowerCase().includes('a')
// }
//const filteredPosts = filterElements<Post>(posts, containsLetterA)
const filteredPosts = posts.filter(
    (p: Post) => p.title.toLocaleLowerCase().includes('a')
)

const numbers = [1, 4, 2, 6, 3, 7, 0, 8, 9, 5]

const transformedArray =
    numbers
        .map(
            (num: number) => `Value: ${num * 5}`
        )
console.log(numbers)
console.log(transformedArray)

// const isEven: logicFnType<number> = function (a: number) {
//     return a % 2 === 0
// }
//const evenNumbers = filterElements<number>(numbers, isEven)
const evenNumbers = numbers.filter(
    (a: number) => {
        return a % 2 === 0
    }
)

// const isOdd: logicFnType<number> = function (a: number) {
//     return a % 2 !== 0
// }
//const oddNumbers = filterElements<number>(numbers, isOdd)
const oddNumbers = numbers.filter(
    function (a: number) {
        return a % 2 !== 0
    }
)

// const isGreaterThanFive: logicFnType<number> = function (a: number) {
//     return a > 5
// }
// const numbersGreatherThanFive = filterElements<number>(numbers, isGreaterThanFive)
const numbersGreatherThanFive = numbers.filter(
    (a: number) => {
        return a > 5
    }
)

console.log(evenNumbers)
console.log("\n")
console.log(oddNumbers)
console.log("\n")
console.log(numbersGreatherThanFive)
console.log("\n")
console.log(filteredPosts)

const foundPost = posts.find(
    (p: Post) => p.id === 4
)
const foundPostIndex = posts.findIndex(
    (p: Post) => p.id === 2
)
console.log("\n")
if (foundPostIndex) //if(foundPost !== undefined)
    console.log(foundPostIndex)
else
    console.log("not found")

//callback mechanism
//map, filter, sort, find, findIndex, etc.....


