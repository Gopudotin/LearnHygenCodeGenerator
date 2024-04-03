---
to: srcnew/<%= moduleName %>/<%= moduleName %>.controller.ts
---
// Module: <%= moduleName %>
// Controller: <%= controllerName %>

import { Controller, Get } from '@nestjs/common';
import { <%= serviceName %>Service } from './<%= moduleName %>.service'; // Import the service

@Controller('<%= moduleName %>')
export class <%= controllerName %>Controller {
  constructor(private readonly <%= serviceName.toLowerCase() %>Service: <%= serviceName %>Service) {}

  @Get()
  getHello(): string {
    return this.<%= serviceName.toLowerCase() %>Service.getHello();
  }
}
