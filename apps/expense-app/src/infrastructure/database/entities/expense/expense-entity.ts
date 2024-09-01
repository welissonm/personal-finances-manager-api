import {
  Expense, ExpenseCategory, ExpenseDocument, ExpenseFrequency, ExpenseOccurrence, ExpenseStatus, ExpenseType
} from "../../../../domain/models/expense";
import { Entity } from "../entity.interface";

export class ExpenseEntity implements Expense, Entity {
  id: string | undefined;
  externalCode: string;
  originalAmount: bigint;
  category: ExpenseCategory;
  type: ExpenseType;
  status: ExpenseStatus;
  dueDate: Date;
  isRecurring: boolean;
  frequency: ExpenseFrequency;
  occurrences: ExpenseOccurrence[];
  description?: string;
  nextDueDate?: Date;
  documents?: ExpenseDocument[];
  deleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}