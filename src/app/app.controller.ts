// Module: app
// Controller: app

import { Controller, Get } from '@nestjs/common';
import { appService } from './app.service'; // Import the service

@Controller('app')
export class appController {
  constructor(private readonly appService: appService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
