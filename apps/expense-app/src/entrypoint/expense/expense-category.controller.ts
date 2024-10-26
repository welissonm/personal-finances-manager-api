import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpenseCategoryDto } from './dto/expense-category.dto';
import { CreateExpenseCategoryUseCase } from '../../domain/use-cases/expense-category';
import { ExpenseCategoryService } from '../../domain/services/expense-category.service';
import { DisableExpenseCategoryUseCase } from '../../domain/use-cases/expense-category/disable-expense-category.case';

@Controller('category')
export class ExpenseController {
  constructor(
    private readonly expenseCategoryService: ExpenseCategoryService,
    private readonly createUseCase: CreateExpenseCategoryUseCase,
    private readonly disableUseCase: DisableExpenseCategoryUseCase
  ) {}

  @Post()
  create(@Body() createExpenseCategoryDto: ExpenseCategoryDto) {
    return this.createUseCase.execute(createExpenseCategoryDto);
  }

  @Get()
  findAll() {
    return this.expenseCategoryService.listAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.expenseCategoryService.findById({
      id
    });
  }

  @Delete(':id')
  async disableCategory(@Param('id') id: string): Promise<void> {
    return await this.disableUseCase.execute({
      id
    });
  }
}
