import { EmployeeType } from "./enums/employee-type";
import { Shift } from "./enums/shift";

export type Employee = {
    id: string,
    firstName: string,
    lastName: string,
    contactNumber: number,
    employeeId: string,
    type: EmployeeType,
    shift: Shift
}