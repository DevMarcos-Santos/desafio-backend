import { Body, Controller, Post, Res } from "@nestjs/common";
import { TaskService } from "src/service/task-service";
import { Request, Response } from "express";
import { Task } from "src/types/task";

@Controller('tasks')
export class TaskController{
    constructor(private taskService: TaskService){}

    @Post()
    async createTask(@Body() body: Task, @Res() res: Response){
        try{
            const result = await this.taskService.createTask(body)
            return res.status(201).json(result)
        }catch(error){
            return res.status(400).json(error)
        }
    }
}