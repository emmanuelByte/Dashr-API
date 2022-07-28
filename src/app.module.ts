import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi'


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './utils/database/typeorm-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_URI: Joi.string()
      }),
      envFilePath: `.env`,
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    })




  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
