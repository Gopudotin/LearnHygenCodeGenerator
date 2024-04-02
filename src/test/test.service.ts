// Module: test
// Service: test

import { Injectable } from '@nestjs/common';

@Injectable()
export class testService {
  getHello(): string {
    return 'Hello World from testService!';
  }
}
