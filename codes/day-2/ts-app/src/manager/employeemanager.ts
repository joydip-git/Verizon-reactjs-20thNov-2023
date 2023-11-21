import { Employee } from "../models/employee";
import { ManagerContract } from "./manager-contract";

export class EmployeeManager implements ManagerContract<Employee>{
    add(item: Employee): boolean {
        throw new Error("Method not implemented.");
    }
    update(id: number, item: Employee): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): Employee | undefined {
        throw new Error("Method not implemented.");
    }
    getAll(): Employee[] {
        throw new Error("Method not implemented.");
    }

}