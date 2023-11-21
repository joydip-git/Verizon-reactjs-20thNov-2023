// import * as Types from "./person";
// import { Person as PersonInfo } from "./person";

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