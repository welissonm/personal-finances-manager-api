import {
  IsString,
  IsDate,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';

import { ExpenseActionType, ExpenseDocument } from "apps/expense-app/src/domain/models/expense";

type CreateExpenseDocumentDtoType = Pick<ExpenseDocument, 'fileUri' | 'actionType' | 'uploadedAt' | 'description'>

export class CreateExpenseDocumentDto implements CreateExpenseDocumentDtoType {
  @IsString({ message: (obj) => `${obj.targetName} deve ser uma string`})
  @IsNotEmpty({ message: (obj) => `${obj.targetName} é obrigatório`})
  fileUri: string;
 
  @IsEnum(ExpenseActionType, {message: 'ação inválida'})
  actionType: ExpenseActionType;
  
  @IsDate({ message: (obj) => `${obj.targetName} é uma data no formato yyyy-MM-dd`})
  uploadedAt: Date;

  @IsString({ message: (obj) => `${obj.targetName} deve ser uma string`})
  description?: string;
}