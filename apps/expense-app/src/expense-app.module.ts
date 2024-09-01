import { Module } from '@nestjs/common';
import { ExpenseAppController } from './expense-app.controller';
import { ExpenseAppService } from './expense-app.service';
import { ModelsModule } from './domain/models/models.module';

@Module({
  imports: [ModelsModule],
  controllers: [ExpenseAppController],
  providers: [ExpenseAppService],
})
export class ExpenseAppModule {}
