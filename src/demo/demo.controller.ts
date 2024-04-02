// Module: demo
// Controller: demo

import { Controller, Get } from '@nestjs/common';

@Controller('demo')
export class demoController {
  constructor(private readonly demoService: demoService) {}

  @Get()
  getHello(): string {
    return this.demoService.getHello();
  }
}