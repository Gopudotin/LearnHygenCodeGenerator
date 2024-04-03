// Module: demo
// Controller: demo

import { Controller, Get } from '@nestjs/common';
import { demoService } from './demo.service'; // Import the service

@Controller('demo')
export class demoController {
  constructor(private readonly demoService: demoService) {}

  @Get()
  getHello(): string {
    return this.demoService.getHello();
  }
}
