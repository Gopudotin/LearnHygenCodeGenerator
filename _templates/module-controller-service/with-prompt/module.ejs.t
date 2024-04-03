---
to: src/<%= moduleName %>/<%= moduleName %>.module.ts
---
// Module: <%= moduleName %>
import { Module } from '@nestjs/common';
import { <%= controllerName %>Controller } from './<%= moduleName %>.controller';
import { <%= serviceName %>Service } from './<%= moduleName %>.service';

@Module({
  imports: [], // Empty imports array
  controllers: [ <%= controllerName %>Controller ],
  providers: [ <%= serviceName %>Service ],
})
export class <%= moduleName %>Module {}
