---
to: src/app/app.module.ts
inject: true
after: imports
---
import { <%= moduleName %>Module } from '../<%= moduleName %>/<%= moduleName %>.module';

