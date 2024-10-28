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

    async listTasks(){
        try{
            const result = await this.taskRepository.listTasks();
            return result;
        }catch(error){
            throw error
        }
    }

    async listTask(id: number){
        try{
            const result = await this.taskRepository.listTask(id);
            return result;
        }catch(error){
            throw error
        }
    }

    async deleteTask(id: number){
        try{
            const result = await this.taskRepository.deleteTask(id);
            return result;
        }catch(error){
            throw error
        }
    }
}