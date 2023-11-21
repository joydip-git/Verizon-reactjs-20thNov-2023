import { Employee } from "../models/employee";

export interface ManagerContract {
    add(emp: Employee): boolean;
    update(id: number, emp: Employee): boolean;
    delete(id: number): boolean;
    get(id: number): Employee | undefined;
    getAll(): Employee[];
}