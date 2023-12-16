import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'http://192.168.1.5:4567',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  }));

  await app.listen(6000, '192.168.1.5' ,() => {
    console.log('NestJS is runing at http://192.168.1.5:6000, to change this go to src/main.ts');
  });
}
bootstrap();

