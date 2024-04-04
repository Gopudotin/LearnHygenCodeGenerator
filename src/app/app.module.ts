// Module: app
import { Module } from '@nestjs/common';
import { appController } from './app.controller';
import { appService } from './app.service';

@Module({
  imports: [
  taskModule
  demoModule, taskModule

], // Empty imports array
  controllers: [ appController ],
  providers: [ appService ],
})
export class appModule {}
