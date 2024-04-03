// Module: demo
import { Module } from '@nestjs/common';
import { demoController } from './demo.controller';
import { demoService } from './demo.service';

@Module({
  imports: [],
  controllers: [ demoController ],
  providers: [ demoService ],
})
export class demoModule {}
