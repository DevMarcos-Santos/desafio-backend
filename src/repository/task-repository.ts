
import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";
import { parse } from "path";
import { PrismaService } from "src/database/prisma.service";
import { TaskType } from "src/types/task";

@Injectable()
export class TaskRepository{
    constructor(private readonly prismaService: PrismaService){}

    async createTask(task: TaskType){
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

    async listTask(id: number){
        try{
            const result = await this.prismaService.task.findMany({
                where: {
                    id: id
                }
            });
            return result
        }catch(error){
            throw error
        }
    }

    async deleteTask(id: number){
        try{
            const result = await this.prismaService.task.delete({
                where: {
                    id: id
                }
            });
            return result
        }catch(error){
            throw error
        }
    }

    async findDateCreated(id: number){
        try{
            const result = await this.prismaService.task.findUnique({
                where: {
                    id: id
                },
                select: {
                    createdAt: true
                }
            })
            return result.createdAt;
        }catch(error){
            throw error
        }
    }

    async updateTask(task: TaskType, id: string){
        try{
            const createdDate = await this.findDateCreated(parseInt(id))
            const result = await this.prismaService.task.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    createdAt: createdDate,
                    updatedAt: new Date(),
                    createdBy: task.createdBy 
                }
            })
            return result;
        }catch(error){
            throw(error)
        }
    }
}