import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestResult } from './interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): TestResult {
    return this.appService.getHello();
  }
}
