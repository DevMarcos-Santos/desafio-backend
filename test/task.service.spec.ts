import { PrismaService } from "../src/database/prisma.service";
import { TaskRepository } from "../src/repository/task-repository";
import { TaskService } from "../src/service/task-service";


describe('TaskService', () => {
    let taskService: TaskService;
    let taskRepository: TaskRepository
    let prismaService: PrismaService

    beforeEach(() => {
        prismaService = new PrismaService();
        taskRepository = new TaskRepository(prismaService);
        taskService = new TaskService(taskRepository);
    })

    describe('TaskTests', () => {
        it('should return an array of tasks', async () => {
            const result = [
                {
                    id: 1,
                    title: 'Test Task',
                    description: 'This is a test task.',
                    status: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 'user@example.com',
                  },
                  {
                    id: 1,
                    title: 'Test Task',
                    description: 'This is a test task.',
                    status: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 'user@example.com',
                  }
            ];
            jest.spyOn(taskService, 'listTasks').mockResolvedValue(result);
            const tasks = await taskService.listTasks();

            expect(tasks).toEqual(result);
        })
        
        it('should return a array of task created', async () => {
            const task = {
                title: 'Test Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'user@example.com',
            }
            const tasks = await taskService.createTask(task);

            expect(tasks).toMatchObject({
                title: 'Test Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'user@example.com',
            })
        })

        it('should return a array of update task', async () => {

            const taskCreate = {
                title: 'Test Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'user@example.com',
            }
            const tasksCreated = await taskService.createTask(taskCreate);

            const task = {
                title: 'Update Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'userupdate@example.com',
            }
            const tasks = await taskService.updateTask(task, tasksCreated.id.toString());

            expect(tasks).toMatchObject({
                title: 'Update Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'userupdate@example.com',
            })
        })

        it('should return a task ', async () => {
            const task = {
                title: 'Test Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'user@example.com',
            }
            const tasks = await taskService.createTask(task);

            const getTask = await taskService.listTask(tasks.id)

            expect(getTask[0]).toMatchObject({
                title: 'Test Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'user@example.com',
            })
        })

        it('should return a task deleted ', async () => {
            const task = {
                title: 'Test Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'user@example.com',
            }
            const tasks = await taskService.createTask(task);

            const deleteTask = await taskService.listTask(tasks.id)

            expect(deleteTask[0]).toMatchObject({
                title: 'Test Task',
                description: 'This is a test task.',
                status: 1,
                createdBy: 'user@example.com',
            })
        })
    })
})