import { Injectable } from '@nestjs/common';
import { TestResult } from './interface';

@Injectable()
export class AppService {
  getHello(): TestResult {
    return {
      data: 'Hello',
    };
  }
}
