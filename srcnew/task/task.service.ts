// Module: task
// Service: task

import { Injectable } from '@nestjs/common';

@Injectable()
export class taskService {
  getHello(): string {
    return 'Hello World from taskService!';
  }
}
