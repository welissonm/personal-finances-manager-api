import { Expense } from "./expense";
import { ExpenseDocument } from "./expense-document";
import { ExpenseStatus } from "./expense-status";

export interface ExpenseOccurrence {
  id: string | undefined;
  expense: Expense;
  status: ExpenseStatus;
  paidAmout: bigint;
  dueDate: Date;
  paymentDate?: Date;
  document?: ExpenseDocument[];
}