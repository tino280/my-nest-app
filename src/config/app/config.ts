import { registerAs } from '@nestjs/config';
import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { validateConfig } from 'src/utils/validate-config';

class EnvironmentVariablesValidator {
  @IsString()
  @Expose()
  APP_URL: string;

  @IsNumber()
  @Expose()
  APP_PORT: number;
}

export default registerAs('app', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    appUrl: process.env.APP_URL ?? 'http://localhost',
    appPort: parseInt(process.env.APP_PORT) ?? 3002,
  };
});
