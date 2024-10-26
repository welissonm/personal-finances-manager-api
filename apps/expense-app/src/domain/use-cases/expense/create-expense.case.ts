import { Expense } from "../../models/expense";
import { UseCase } from "../interfaces/use-case.interface";

export class CreateExpenseUseCase implements UseCase<Expense>{
  execute(input: Expense): Promise<Expense> {
    throw new Error("Method not implemented.");
  }
  
}