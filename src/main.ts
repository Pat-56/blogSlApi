import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
   const httpsOptions = {
    key: fs.readFileSync('./.secrets/create-cert-key.pem'),
    cert: fs.readFileSync('./.secrets/create-cert.pem'),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
