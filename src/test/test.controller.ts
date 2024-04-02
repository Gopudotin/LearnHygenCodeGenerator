// Module: test
// Controller: test

import { Controller, Get } from '@nestjs/common';
import { testService } from './test.service'; // Import the service

@Controller('test')
export class testController {
  constructor(private readonly testService: testService) {}

  @Get()
  getHello(): string {
    return this.testService.getHello();
  }
}