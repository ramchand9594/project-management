Considered below
1. All the tasks will be direct child of project
2. status of task/project can be NEW/WORKING/DONE
3. Added multiple type of employees
4. Depending on the requirement of type of resource the resource limit can be added for each task
5. Dependent tasks will be added in each task
6. The working employees for a task can be maintained inside the task
7. Each task and project will have startDate and endDate. They also have the estimatedHours.
8. database folder will have implementation to fetch from Database. Now this folder has dummy methods
9. service folder has the service logic. For example to check if the project can be completed on time sample method of isOnSchedule can be used. The logic is not completed for this
10. api folder will have the endpoints that will be exposed to the user
11. To maintain environment variables dotenv is used
12. created models for project, employee and tasks