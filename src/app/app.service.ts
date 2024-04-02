// Module: app
// Service: app

import { Injectable } from '@nestjs/common';

@Injectable()
export class appService {
  getHello(): string {
    return 'Hello World from appService!';
  }
}

