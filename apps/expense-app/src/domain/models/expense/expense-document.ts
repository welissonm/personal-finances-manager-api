import { Expense } from "./expense";
import { ExpenseActionType } from "./expense-action-type";
import { ExpenseOccurrence } from "./expense-occurrence";

export interface ExpenseDocument {
  id: string | undefined;
  expense: Expense;
  expenseOcurrence?: ExpenseOccurrence;
  fileUri: string;
  actionType: ExpenseActionType;
  uploadedAt: Date;
  description?: string;
}