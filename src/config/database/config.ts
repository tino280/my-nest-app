import { registerAs } from '@nestjs/config';
import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { validateConfig } from 'src/utils/validate-config';

class EnvironmentVariablesValidator {
  @IsString()
  @Expose()
  DATABASE_DRIVER: string;

  @IsString()
  @Expose()
  DATABASE_HOST: string;

  @IsNumber()
  @Expose()
  DATABASE_PORT: number;

  @IsString()
  @Expose()
  DATABASE_USER: string;

  @IsString()
  @Expose()
  DATABASE_PASSWORD: string;

  @IsString()
  @Expose()
  DATABASE_NAME: string;
}

export default registerAs('database', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    driver: process.env.DATABASE_DRIVER ?? 'mysql',
    host: process.env.DATABASE_HOST ?? 'http://localhost',
    port: parseInt(process.env.DATABASE_PORT) ?? 3306,
    user: process.env.DATABASE_USER ?? 'root',
    password: process.env.DATABASE_PASSWORD ?? '',
    name: process.env.DATABASE_NAME ?? 'nest_app',
  };
});
