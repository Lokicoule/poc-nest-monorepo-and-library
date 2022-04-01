import { sayHello } from '@core/core';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(sayHello());
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
