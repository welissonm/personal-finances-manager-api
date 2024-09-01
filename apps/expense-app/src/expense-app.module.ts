import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configurationFactory from './configs';

import { ExpenseAppController } from './expense-app.controller';
import { ExpenseAppService } from './expense-app.service';
import { ModelsModule } from './domain/models/models.module';


@Module({
  imports: [ConfigModule.forRoot({
    load: [configurationFactory],
  }),, ModelsModule],
  controllers: [ExpenseAppController],
  providers: [ExpenseAppService],
})
export class ExpenseAppModule {}
