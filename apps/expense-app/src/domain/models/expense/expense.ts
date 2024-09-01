import { ExpenseCategory } from "./expense-category";
import { ExpenseDocument } from "./expense-document";
import { ExpenseFrequency } from "./expense-frequency";
import { ExpenseOccurrence } from "./expense-occurrence";
import { ExpenseStatus } from "./expense-status";
import { ExpenseType } from "./expense-type";

export interface Expense {
  id: string | undefined;
  externalCode: string;
  originalAmount: bigint;
  category: ExpenseCategory;
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