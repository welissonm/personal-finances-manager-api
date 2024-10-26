import { Expense, ExpenseActionType, ExpenseDocument } from "apps/expense-app/src/domain/models/expense";

import { Entity } from "../entity.interface";
import { ExpenseOccurrenceEntity } from "./expense-occurrence.entity";

export class ExpenseDocumentEntity implements Entity, ExpenseDocument {
  id: string | undefined;
  fileUri: string;
  actionType: ExpenseActionType;
  uploadedAt: Date;
  expenseId: string;
  expense: Expense;
  expenseOcurrenceId?: string;
  expenseOcurrence?: ExpenseOccurrenceEntity;
  description?: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}