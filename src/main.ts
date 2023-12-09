import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, '127.0.0.1' ,() => {
    console.log('NestJS is runing at http://127.0.0.1:3000, to change this go to src/main.ts');
  });
}
bootstrap();
