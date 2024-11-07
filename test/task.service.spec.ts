import { PrismaService } from "src/database/prisma.service";
import { TaskRepository } from "src/repository/task-repository";
import { TaskService } from "src/service/task-service";


describe('TaskService', () => {
    let taskService: TaskService;
    let taskRepository: TaskRepository
    let prismaService: PrismaService

    beforeEach(() => {
        prismaService = new PrismaService();
        taskRepository = new TaskRepository(prismaService);
        taskService = new TaskService(taskRepository);
    })

    describe('listTasks', () => {
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
                  }
            ];
            jest.spyOn(taskService, 'listTasks').mockResolvedValue(result);
            const tasks = await taskService.listTasks();

            expect(tasks).toEqual(result);
        })
    })
})