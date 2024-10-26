import { Expense, ExpenseCategory, ExpenseDocument, ExpenseFrequency, ExpenseOccurrence, ExpenseStatus, ExpenseType } from "apps/expense-app/src/domain/models/expense";
import { ExpenseCategoryDto } from "./expense-category.dto";

export class ExpenseDto implements Expense {
  id: string;
  externalCode: string;
  originalAmount: bigint;
  categoryId: string;
  category: ExpenseCategoryDto;
  type: ExpenseType;
  status: ExpenseStatus;
  createdAt: Date;
  dueDate: Date;
  isRecurring: boolean;
  frequency: ExpenseFrequency;
  occurrences: ExpenseOccurrence[];
  description?: string;
  nextDueDate?: Date;
  documents?: ExpenseDocument[];
}