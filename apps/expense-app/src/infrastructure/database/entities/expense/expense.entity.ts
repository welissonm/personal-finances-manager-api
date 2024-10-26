import {
  Expense, ExpenseFrequency, ExpenseStatus, ExpenseType
} from "../../../../domain/models/expense";
import { Entity } from "../entity.interface";
import { ExpenseCategoryEntity } from "./expense-category.entity";
import { ExpenseDocumentEntity } from "./expense-document.entity";
import { ExpenseOccurrenceEntity } from "./expense-occurrence.entity";

export class ExpenseEntity implements Expense, Entity {
  id: string | undefined;
  externalCode: string;
  originalAmount: bigint;
  categoryId: string;
  category: ExpenseCategoryEntity;
  type: ExpenseType;
  status: ExpenseStatus;
  dueDate: Date;
  isRecurring: boolean;
  frequency: ExpenseFrequency;
  occurrences: ExpenseOccurrenceEntity[];
  description?: string;
  nextDueDate?: Date;
  documents?: ExpenseDocumentEntity[];
  deleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}