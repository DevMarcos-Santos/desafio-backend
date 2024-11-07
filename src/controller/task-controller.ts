import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { TaskService } from "src/service/task-service";
import { Response } from "express";
import { TaskType, TaskTypeClass } from "src/types/task";
import { ApiBody, ApiParam } from "@nestjs/swagger";

@Controller('tasks')
export class TaskController{
    constructor(private readonly taskService: TaskService){}

    @Post()
    @ApiBody({
        type: TaskTypeClass
    })
    async createTask(@Body() body: TaskType, @Res() res: Response){
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
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'The ID of the task to search',

    })
    async listTask(@Param() params: any, @Res() res: Response){
        try{
            const result = await this.taskService.listTask(parseInt(params.id));
            return res.status(200).json(result)
        }catch(error){
            return res.status(400).json(error)
        }
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'The ID of the task to delete',

    })
    async deleteTask(@Param() params: any, @Res() res: Response){
        try{
            const result = await this.taskService.deleteTask(parseInt(params.id));
            return res.status(200).json(result)
        }catch(error){
            return res.status(400).json(error)
        }
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'The ID of the task to update',

    })
    @ApiBody({
        type: TaskTypeClass
    })
    async updateTask(@Param() params: any, @Body() body: TaskType, @Res() res: Response){
        try{
            const result = await this.taskService.updateTask(body, params.id);
            return res.status(200).json(result);
        }catch(error){
            return res.status(200).json(error)
        }
    }
}