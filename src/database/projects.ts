import { Status } from "../models/enums/status";
import { Project } from "../models/project";
import { Tasks } from "../models/tasks";

export class ProjectsDataAccess {
    static async getProject(id: string): Promise<Project | undefined> {
        return Promise.resolve({
            id: id,
            description: "Project description",
            endDate: new Date(),
            startDate: new Date(),
            estimatedHours: 800,
            managerId: "",
            status: Status.NEW,
            title: "New Project",
            createdDate: new Date(),
            updatedDate: new Date(),
            createdUser: "",
            updatedUser: ""
        })
    }

    static async getProjectsWithIds(ids: string[]): Promise<Project[]> {
        return Promise.resolve([]);
    }

    static async getAllProjects(): Promise<Project[]> {
        return Promise.resolve([]);
    }
}