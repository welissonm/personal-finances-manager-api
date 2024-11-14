import { Injectable } from "@nestjs/common";
import { ConflictException } from "../../exceptions";
import { ExpenseCategory } from "../../models/expense";
import { ExpenseCategoryService } from "../../services/expense-category.service";
import { UseCase } from "../interfaces/use-case.interface";

@Injectable()
export class CreateExpenseCategoryUseCase implements UseCase<ExpenseCategory, ExpenseCategory>{
  constructor(private readonly service: ExpenseCategoryService){}
  executer(input: ExpenseCategory): Promise<ExpenseCategory> {
    throw new Error("Method not implemented.");
  }

  async execute(expenseCategoy: ExpenseCategory): Promise<ExpenseCategory> {
    const alreadyExist = await this.service.exists({
      name: expenseCategoy.name.toUpperCase()
    });
    if(alreadyExist){
      throw new ConflictException(`Já existe uma categoria com o nome de ${expenseCategoy.name}`);
    }
    return await this.service.create(expenseCategoy);
  }
}