import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import appConfig from './config/app/config';
import databaseConfig from './config/database/config';
import { CategoryService } from './category/category.service';
import { Category } from './category/entities/category.entity';
import { Producer } from './producers/entities/producer.entity';
import { ProducerService } from './producers/service/producer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.getOrThrow<
          | 'mysql'
          | 'postgres'
          | 'sqlite'
          | 'mariadb'
          | 'oracle'
          | 'mssql'
          | 'mongodb'
        >('database.driver'),
        host: configService.getOrThrow<string>('database.host'),
        port: parseInt(configService.getOrThrow<string>('database.port'), 10),
        username: configService.getOrThrow<string>('database.user'),
        password: configService.getOrThrow<string>('database.password'),
        database: configService.getOrThrow<string>('database.name'),
        autoLoadEntities: true,
        entities: [Category, Producer],
        synchronize: false,
      }),
    }),
    TypeOrmModule.forFeature([Category, Producer]),
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CategoryService, ProducerService],
})
export class AppModule {}
