import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const port = 3001;
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true }); // effect: inject dependencies into custom validation
  await app.listen(3001);
  Logger.log(`Running on http://localhost:${port}`);
}
bootstrap();
