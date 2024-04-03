// Module: demo
// Service: demo

import { Injectable } from '@nestjs/common';

@Injectable()
export class demoService {
  getHello(): string {
    return 'Hello World from demoService!';
  }
}
