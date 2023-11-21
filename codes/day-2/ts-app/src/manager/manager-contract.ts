export interface ManagerContract<T> {
    // add(emp: Employee): boolean;
    // update(id: number, emp: Employee): boolean;
    // delete(id: number): boolean;
    // get(id: number): Employee | undefined;
    // getAll(): Employee[];

    add(item: T): boolean;
    update(id: number, item: T): boolean;
    delete(id: number): boolean;
    get(id: number): T | undefined;
    getAll(): T[];
}