// import * as Types from "./person";
// import { Person as PersonInfo } from "./person";

//type parameter
// function add<TInput, TResult>(a: TInput, b: TInput): TResult {

// }

// add<number, number>(12, 3)
// add<string, string>('joy', 'dip')

/*
class MyCollection<TElement>{
    private _elements: TElement[];
    constructor() {
        this._elements = new Array<TElement>()
    }
    add(e: TElement) {
        this._elements.push(e)
    }

    get elements(): TElement[] {
        return this._elements
    }

    getElements(): TElement[] {
        return this._elements
    }
}

const collection = new MyCollection<number>()
collection.add(12)
collection.add(1)

// const all = collection.elements
const all = collection.getElements()
for (const element of all) {
    console.log(element)
}
*/

import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { EmployeeManager } from "./manager/employeemanager";

const anilDev = new Developer(1, 'anil', 100, 200, 300, 400)
anilDev.calculateSalary()
const sunilHr = new Hr(2, 'sunil', 101, 201, 301, 401)
sunilHr.calculateSalary()

const managerRef = new EmployeeManager()
managerRef.add(anilDev)
managerRef.add(sunilHr)

const allRecords = managerRef.getAll()
for (const employee of allRecords) {
    console.log(`${employee.name} has got salary: ${employee.totalSalary}`)
}