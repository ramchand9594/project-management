import { EmployeeType } from "./enums/employee-type";
import { Status } from "./enums/status";

// Considered status as NEW, WORKING, DONE
export type Tasks = {
    id: string,
    title: string,
    description: string,
    status: Status,
    parentProjectId: string,
    startDate: Date,
    endDate: Date,
    estimatedHours: number,
    dependentTasks: {
        needsCompletionToStart: Boolean,
        taskId: string,
    }[],
    workingEmployeesId: string[],
    requiredEmployeeTypes: {
        type: EmployeeType,
        count: number
    }[]
}