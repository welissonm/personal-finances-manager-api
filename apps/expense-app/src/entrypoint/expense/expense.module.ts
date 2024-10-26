import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { DrizzleModule } from '../../infrastructure/database/dizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
