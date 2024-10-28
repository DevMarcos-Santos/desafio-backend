import { Body, Controller, Delete, Get, Param, Post, Res } from "@nestjs/common";
import { TaskService } from "src/service/task-service";
import { Response } from "express";
import { Task } from "src/types/task";

@Controller('tasks')
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Post()
    async createTask(@Body() body: Task, @Res() res: Response){
        try{
            const result = await this.taskService.createTask(body)
            return res.status(201).json(result)
        }catch(error){
            return res.status(400).json(error)
        }
    }

    @Get()
    async listTasks( @Res() res: Response){
        try{
            const result = await this.taskService.listTasks();
            return res.status(200).json(result)
        }catch(error){
            return res.status(400).json(error)
        }
    }

    @Get(':id')
    async listTask(@Param() params: any, @Res() res: Response){
        try{
            const result = await this.taskService.listTask(parseInt(params.id));
            return res.status(200).json(result)
        }catch(error){
            return res.status(400).json(error)
        }
    }

    @Delete(':id')
    async deleteTask(@Param() params: any, @Res() res: Response){
        try{
            const result = await this.taskService.deleteTask(parseInt(params.id));
            return res.status(200).json(result)
        }catch(error){
            return res.status(400).json(error)
        }
    }
}