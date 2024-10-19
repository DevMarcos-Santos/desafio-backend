import { Injectable } from "@nestjs/common";
import { TaskRepository } from "src/repository/task-repository";
import { Task } from "src/types/task";

@Injectable()
export class TaskService{
    constructor(private taskRepository: TaskRepository){}

    async createTask(task: Task){
        try{
            const result = await this.taskRepository.createTask(task)
            return result;
        }catch(error){
            throw error
        }
    }
}