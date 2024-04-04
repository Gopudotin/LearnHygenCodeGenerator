// Module: task
// Controller: task

import { Controller, Get } from '@nestjs/common';
import { taskService } from './task.service'; // Import the service

@Controller('task')
export class taskController {
  constructor(private readonly taskService: taskService) {}

  @Get()
  getHello(): string {
    return this.taskService.getHello();
  }
}
