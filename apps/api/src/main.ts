import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { URL } from 'node:url';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  const apiUrl = configService.get('API_URL');
  const url = new URL(apiUrl);

  const swaggerEnabled = configService.get('SWAGGER_ENABLED') === 'true';

  if (swaggerEnabled) {
    const config = new DocumentBuilder().setVersion('1.0').build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, documentFactory);
  }

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(url.port);

  console.log(`Service is running on: ${await app.getUrl()}`);
}

await bootstrap();
