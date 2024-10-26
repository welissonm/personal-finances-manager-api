import { ExpenseCategory } from "apps/expense-app/src/domain/models/expense";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ExpenseCategoryDto implements ExpenseCategory {
  id: string | undefined;
  
  @IsString({ message: (obj) => `${obj.targetName} deve ser uma string`})
  @IsNotEmpty({ message: (obj) => `${obj.targetName} é obrigatório`})
  @MinLength(5, { message: 'o nome da categoria muito curto'})
  name: string;

  @IsString({ message: (obj) => `${obj.targetName} deve ser uma string`})
  description?: string;
}