// Module: test
import { Module } from "@nestjs/common";
import { testController } from "./test.controller";
import { testService } from "./test.service";

@Module({
  controllers: [testController],
  providers: [testService],
})
export class testModule {}
