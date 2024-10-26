import { Expense, ExpenseDocument, ExpenseOccurrence, ExpenseStatus } from "apps/expense-app/src/domain/models/expense";
import { Entity } from "../entity.interface";

export class ExpenseOccurrenceEntity implements ExpenseOccurrence, Entity {
  id: string | undefined;
  expenseId: string;
  expense: Expense;
  status: ExpenseStatus;
  paidAmout: bigint;
  dueDate: Date;
  paymentDate?: Date;
  document?: ExpenseDocument[];
  createdAt: Date;
  deleted: boolean;
  updatedAt?: Date;
  deletedAt?: Date;
}