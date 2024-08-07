import { NestFactory } from '@nestjs/core';
import { ExpenseAppModule } from './expense-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ExpenseAppModule);
  await app.listen(3000);
}
bootstrap();
