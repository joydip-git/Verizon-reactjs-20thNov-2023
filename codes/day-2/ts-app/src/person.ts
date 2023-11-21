export class Person {
    /*
    name: string;
    id: number;
    salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    */
    constructor(public id: number, public name: string, public salary: number) {

    }
    show(): string {
        return `Name:${this.name}, Id:${this.id}, Salary:${this.salary}`
    }
}
/**
 * Types = {Person:Person}
 */