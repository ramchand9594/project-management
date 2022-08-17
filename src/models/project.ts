import { Status } from "./enums/status";

export type Project = {
    id: string,
    title: string,
    description: string,
    startDate: Date,
    endDate: Date,
    estimatedHours: number,
    managerId: string,
    status: Status
}