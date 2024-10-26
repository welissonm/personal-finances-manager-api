import { Expense, ExpenseCategory, ExpenseDocument, ExpenseFrequency, ExpenseOccurrence, ExpenseStatus, ExpenseType } from "apps/expense-app/src/domain/models/expense";
import { CreateExpenseDocumentDto } from "./create-expense-document.dto";
import { IsBoolean, IsDate, IsEnum, IsInt, IsNotEmpty, IsPositive, IsString, ValidateIf, ValidateNested } from "class-validator";
import * as EnumHelpers from '../../../helpers/enum';

type CreateExpenseDtoType = Omit<Expense, 'category'| 'occurrences' | 'status' | 'id' | 'originalAmount' | 'documents'>

export class CreateExpenseDto implements CreateExpenseDtoType {
  @IsString({ message: (obj) => `${obj.targetName} deve ser uma string`})
  @IsNotEmpty({ message: (obj) => `${obj.targetName} é obrigatório`})
  externalCode: string;
   
  @IsInt({ message: (obj) => `${obj.targetName} deve ser um numero inteiro em centavos`})
  @IsPositive({ message: (obj) => `${obj.targetName} deve ser um numero inteiro, positivo e em centavos`})
  amount: number;

  @IsString({ message: (obj) => `${obj.targetName} deve ser uma string`})
  @IsNotEmpty({ message: (obj) => `${obj.targetName} é obrigatório`})
  categoryId: string;

  @IsEnum(ExpenseType, {message: 'tipo de despesa inválido'})
  type: ExpenseType;

  @IsDate({ message: (obj) => `${obj.targetName} é uma data no formato yyyy-MM-dd`})
  createdAt: Date;

  @IsDate({ message: (obj) => `${obj.targetName} é uma data no formato yyyy-MM-dd`})
  dueDate: Date;

  @IsBoolean({ message: (obj) => `${obj.targetName} deve true ou falso`})
  @IsNotEmpty({ message: (obj) => `${obj.targetName} é obrigatório`})
  isRecurring: boolean;

  @IsEnum(ExpenseFrequency, {message: 'tipo de frequência inválida'})
  frequency: ExpenseFrequency;

  @IsString({ message: (obj) => `${obj.targetName} deve ser uma string`})
  description?: string;

  @IsDate({ message: (obj) => `${obj.targetName} é uma data no formato yyyy-MM-dd`})
  nextDueDate?: Date;
  
  @ValidateNested({ each: true})
  documents?: CreateExpenseDocumentDto[];

  static checkFrequency(instance: Partial<CreateExpenseDto>): boolean {
    const defined = instance?.frequency && 
      EnumHelpers.exists(ExpenseFrequency, instance?.frequency);
    if(instance?.isRecurring) {
      return defined && ExpenseFrequency[instance.frequency] !== ExpenseFrequency.SINGLE
    }
    return defined;
  } 
}
