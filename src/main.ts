import { NestFactory } from '@nestjs/core';

export function  AppService() {
    return 'Hello World!';
  }

export async function bootstrap() {
  const app = await NestFactory.create(AppService);
  await app.listen(3000);
  console.log("server runing")

}

bootstrap();
