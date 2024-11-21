import { NotFoundException } from "../../exceptions";
import { StateViolationException } from "../../exceptions/state-violation.exception";
import { Expense, ExpenseOccurrence, ExpenseStatus } from "../../models/expense";
import { ExpenseOccurrenceRepository } from "../../repositories/expense-occurrence-repository.interface";
import { ExpenseRepository } from "../../repositories/expense-repository.interface";
import { UseCase } from "../interfaces/use-case.interface";
import { CreateExpenseOccurrenceUseCaseInput } from "./expense-occurrence-use-case.type";

export class CreateExpenseOccurenceUseCase implements UseCase<CreateExpenseOccurrenceUseCaseInput, ExpenseOccurrence>{
  constructor(
    private readonly expenseRepository: ExpenseRepository, 
    private readonly expenseOccurrenceRepository: ExpenseOccurrenceRepository){

  }

  async execute(input: CreateExpenseOccurrenceUseCaseInput): Promise<ExpenseOccurrence> {
    const expense = await this.expenseRepository.findById({ id: input.expenseId });
    if(!expense){
      throw new NotFoundException(`expense with id ${input.expenseId} not found`);
    }

    await this.verifyExpenseFrequence(expense)

    const expenseOccurence = await this.expenseOccurrenceRepository.create({
      expenseId: input.expenseId,
      dueDate: input.dueDate,
      status: ExpenseStatus.OPEN,
    })

    return await this.expenseOccurrenceRepository.save(expenseOccurence)
  }

  async verifyExpenseFrequence(expense: Expense) {
    if(!expense.isRecurring && (await this.expenseRepository.countOccurrences({ id: expense.id })) >= 1){
      throw new StateViolationException('frequency', 'the frequency of the expense does not allow for recurrence')
    }
  }

}
