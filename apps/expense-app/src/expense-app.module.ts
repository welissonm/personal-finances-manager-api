import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configurationFactory from './configs';

import { ExpenseAppController } from './expense-app.controller';
import { ExpenseAppService } from './expense-app.service';
import { ExpenseModule } from './entrypoint/expense/expense.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurationFactory],
  }), ExpenseModule],
  controllers: [ExpenseAppController],
  providers: [ExpenseAppService],
})
export class ExpenseAppModule {}
