import { BaseData } from "./base-data";
import { Status } from "./enums/status";
import { Tasks } from "./tasks";

export interface Project extends BaseData {
    id: string,
    title?: string,
    description?: string,
    startDate: Date,
    endDate: Date,
    estimatedHours: number,
    managerId: string,
    status: Status,
}