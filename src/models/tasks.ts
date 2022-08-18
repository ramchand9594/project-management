import { BaseData } from "./base-data";
import { EmployeeType } from "./enums/employee-type";
import { Status } from "./enums/status";

// Considered status as NEW, WORKING, DONE
// Assumption 2: All the tasks will be direct child of project
// Deleted is by default false, when the task is removed deeleted will be set to true
export interface Tasks extends BaseData {
    id: string,
    title?: string,
    description?: string,
    status: Status,
    deleted: Boolean,
    parentProjectId: string,
    startDate: Date,
    endDate: Date,
    estimatedHours: number,
    dependentTasks: string[],
    workingEmployeesId: {
        type: EmployeeType,
        ids: string[],
    },
    requiredEmployeeTypes: {
        type: EmployeeType,
        count: number
    }[]
}