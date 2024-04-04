---
to: srcnew/<%= moduleName %>/<%= moduleName %>.module.ts
---
import { Module } from '@nestjs/common';
import { <%= controllerName %>Controller } from './<%= moduleName %>.controller';
import { <%= serviceName %>Service } from './<%= moduleName %>.service';

@Module({
  imports: [], // Leave imports empty for new modules
  controllers: [ <%= controllerName %>Controller ],
  providers: [ <%= serviceName %>Service ],
})
export class <%= moduleName %>Module {}