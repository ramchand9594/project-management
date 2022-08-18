import { Tasks } from "../models/tasks";

export class TasksService {
    static async getTasksOfProject(projectId: string): Promise<Tasks[]> {
        return Promise.resolve([]);
    }

    static async getTasksWithIds(ids: string[]): Promise<Tasks[]> {
        return Promise.resolve([]);
    }

    static async addTaskToProject(): Promise<Boolean> {
        return true;
    }

    static async removeTask(): Promise<Boolean> {
        return true;
    }
}