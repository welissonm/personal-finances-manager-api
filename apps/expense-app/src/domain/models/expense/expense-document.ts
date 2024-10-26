import { DigitalDocument } from "../digital-document";
import { Expense } from "./expense";
import { ExpenseActionType } from "./expense-action-type";
import { ExpenseOccurrence } from "./expense-occurrence";

export interface ExpenseDocument extends DigitalDocument{
  id: string | undefined;
  expenseId: string;
  expense: Expense;
  expenseOcurrenceId?: string;
  expenseOcurrence?: ExpenseOccurrence;
  actionType: ExpenseActionType;
}