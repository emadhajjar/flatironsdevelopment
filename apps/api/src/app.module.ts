import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'node:path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const environmentFilePath = `../../conf/${process.env.NODE_ENV ?? 'dev'}.env`;

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({
      envFilePath: environmentFilePath,
      isGlobal: true,
    }),
    PrismaModule,
    ServeStaticModule.forRoot(
      {
        renderPath: '/uploads',
        rootPath: path.join(import.meta.dirname, '..', 'uploads'),
      },
      {
        renderPath: '/docs',
        rootPath: path.join(import.meta.dirname, '../..', 'prisma/docs'),
      },
    ),
    ScheduleModule.forRoot(),
  ],
  providers: [AppService],
})
export class AppModule {}
