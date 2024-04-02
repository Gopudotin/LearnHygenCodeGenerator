---
to: src/<%= moduleName %>/<%= moduleName %>.service.ts
---
// Module: <%= moduleName %>
// Service: <%= serviceName %>

import { Injectable } from '@nestjs/common';

@Injectable()
export class <%= serviceName %>Service {
  getHello(): string {
    return 'Hello World from <%= serviceName %>Service!';
  }
}
