// Module: task
import { Module } from '@nestjs/common';
import { taskController } from './task.controller';
import { taskService } from './task.service';

@Module({
  imports: [],
  controllers: [ taskController ],
  providers: [ taskService ],
})
export class taskModule {}
