import { Expense } from "../models/expense";
import { IdCriterial } from "../query-criterias";
import { CreateExpenseType } from "./create-expense.type";

export interface ExpenseRepository {
  findById(idCriterial: IdCriterial): Promise<Expense>;
  create(expenseOccurrence: CreateExpenseType): Promise<Expense>
  save(expenseOccurrence: Expense): Promise<Expense>;
  countOccurrences(idCriterial: IdCriterial): Promise<number>;
}