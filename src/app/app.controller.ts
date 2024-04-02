// Module: app
// Controller: app

import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class appController {
  @Get()
  getHello(): string {
    return 'Hello World from appController!';
  }
}
