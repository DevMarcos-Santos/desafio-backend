import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { TaskRepository } from './repository/task-repository';
import { TaskService } from './service/task-service';
import { TaskController } from './controller/task-controller';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [PrismaService, TaskRepository, TaskService],
})
export class AppModule {}
