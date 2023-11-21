import { Employee } from "./employee";

export class Developer extends Employee {
    //id: number;
    constructor(id: number, name: string, basicPayment: number, daPayment: number, hraPayment: number, public incentivePayment: number) {
        //this.id=id
        super(id, name, basicPayment, daPayment, hraPayment)
    }
    calculateSalary(): void {
        super.calculateSalary()
        this.totalSalary += this.incentivePayment
    }
}