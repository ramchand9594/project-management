import { ProjectsDataAccess } from "../database/projects";

export class ProjectService {
    static async isOnSchedule(projectId: string): Promise<Boolean> {
        const project = await ProjectsDataAccess.getProject(projectId);
        const tasks = await ProjectsDataAccess.getTasksOfProject(projectId);
        const relatedTaskIds = tasks.map(task => task.dependentTasks).filter(taskIds => taskIds.length > 0).flat();
        const relatedTasks = await ProjectsDataAccess.getTasksWithIds(relatedTaskIds);
        const allTasks = [...tasks, ...relatedTasks];
        
        return false;
    }
}