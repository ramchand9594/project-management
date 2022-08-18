import { BaseData } from "./base-data";
import { EmployeeType } from "./enums/employee-type";
import { Shift } from "./enums/shift";

export interface Employee extends BaseData {
    id: string,
    firstName: string,
    lastName?: string,
    contactNumber?: number,
    employeeId: string,
    type: EmployeeType,
    shift: Shift
}