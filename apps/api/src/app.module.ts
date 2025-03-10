import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'node:path';

import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const environmentFilePath = `../../conf/${process.env.NODE_ENV ?? 'dev'}.env`;

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: environmentFilePath,
      isGlobal: true,
    }),
    ProductsModule,
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
  providers: [],
})
export class AppModule {}
