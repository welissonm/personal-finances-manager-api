import { Controller, Get } from '@nestjs/common';
import { ExpenseAppService } from './expense-app.service';

@Controller()
export class ExpenseAppController {
  constructor(private readonly expenseAppService: ExpenseAppService) {}

  @Get()
  getHello(): string {
    return this.expenseAppService.getHello();
  }
}
