import { Module } from '@nestjs/common';
import { ExpenseAppController } from './expense-app.controller';
import { ExpenseAppService } from './expense-app.service';

@Module({
  imports: [],
  controllers: [ExpenseAppController],
  providers: [ExpenseAppService],
})
export class ExpenseAppModule {}
