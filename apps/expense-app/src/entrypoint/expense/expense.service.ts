import { Inject, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import type { DbConnectionType } from 'apps/expense-app/src/infrastructure/database/dizzle/@types/drizzle';
import { DRIZZLE_PROVIDER } from '../../infrastructure/database/dizzle/drizzle.module';

@Injectable()
export class ExpenseService {

  constructor(
    @Inject(DRIZZLE_PROVIDER)
    private readonly db: DbConnectionType 
  ){

  }
  create(createExpenseDto: CreateExpenseDto) {
    return 'This action adds a new expense';
  }

  async findAll() {
    return await this.db.query.expense.findMany({
      with: {
        documents: true,
        occurrences: true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
