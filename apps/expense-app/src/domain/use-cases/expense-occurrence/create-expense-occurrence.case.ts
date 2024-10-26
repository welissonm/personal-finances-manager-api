import { ExpenseOccurrence } from "../../models/expense";
import { UseCase } from "../interfaces/use-case.interface";

export class CreateExpenseOccurenceUseCase implements UseCase<ExpenseOccurrence>{
  execute(input: ExpenseOccurrence): Promise<ExpenseOccurrence> {
    throw new Error("Method not implemented.");
  }

}
