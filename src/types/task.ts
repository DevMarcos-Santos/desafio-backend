export type TaskType =  {
    title: string,
    description: string,
    status: number;
    createdBy: string;
}



// src/types/task.ts
import { ApiProperty } from '@nestjs/swagger';

export class TaskTypeClass {
  @ApiProperty({
    description: 'The title of the task',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'A description of the task',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'The status of the task',
    type: Number,
  })
  status: number;

  @ApiProperty({
    description: 'The user who created the task',
    type: String,
  })
  createdBy: string;
}
