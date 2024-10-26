import { Expense } from "../models/expense";
import { IdCriterial } from "../query-criterias";

export interface ExpenseRepository {
  findById(idCriterial: IdCriterial): Promise<Expense>;
}