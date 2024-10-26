import { ExpenseStatus } from "../models/expense"

export type CreateExpenseOccurenceType = {
  expenseId: string,
  dueDate: Date,
  status: ExpenseStatus
}