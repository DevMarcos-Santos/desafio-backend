
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { Task } from "src/types/task";

@Injectable()
export class TaskRepository{
    constructor(private readonly prismaService: PrismaService){}

    async createTask(task: Task){
        try{
            const result = await this.prismaService.task.create({
                data: {
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    createdAt: new Date(),
                    createdBy: task.createdBy 
                    
                }
            })
            return result;
        }catch(error){
            throw error
        }
    }

    async listTasks(){
        try{
            const result = await this.prismaService.task.findMany();
            return result
        }catch(error){
            throw error
        }
    }
}