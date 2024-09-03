import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import databaseConfig from '../src/config/database/config';

config();

const databaseConfigObject = databaseConfig();

const AppDataSource = new DataSource({
  type: databaseConfigObject.driver as any,
  host: databaseConfigObject.host,
  port: databaseConfigObject.port,
  username: databaseConfigObject.user,
  password: databaseConfigObject.password,
  database: databaseConfigObject.name,
  entities: ['src/**/**/*.entity.ts'],
  migrations: ['databases/migrations/*.ts'],
  synchronize: false,
});

export default AppDataSource;
