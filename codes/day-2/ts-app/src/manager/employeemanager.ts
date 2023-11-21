import { Employee } from "../models/employee";
import { employees } from "../repository/employees";
import { ManagerContract } from "./manager-contract";

export class EmployeeManager implements ManagerContract<Employee>{
    add(item: Employee): boolean {
        employees.push(item)
        return true
    }
    update(id: number, item: Employee): boolean {
        return false
    }
    delete(id: number): boolean {
        return false
    }
    get(id: number): Employee | undefined {
        return undefined
    }
    getAll(): Employee[] {
        const copy = [...employees]
        return copy
    }
}