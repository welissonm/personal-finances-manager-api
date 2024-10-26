import { ExpenseOccurrence } from "../models/expense";
import { IdCriterial } from "../query-criterias";
import { CreateExpenseOccurenceType } from "./create-expense-occurrence.type";

export interface ExpenseOccurrenceRepository {
  findById(idCriterial: IdCriterial): Promise<ExpenseOccurrence>
  create(expenseOccurrence: CreateExpenseOccurenceType): Promise<ExpenseOccurrence>
}