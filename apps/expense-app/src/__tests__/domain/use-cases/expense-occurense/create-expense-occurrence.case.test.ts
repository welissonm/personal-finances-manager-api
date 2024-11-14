import { Mock, mock } from 'ts-jest-mocker';

import { ExpenseRepository } from "apps/expense-app/src/domain/repositories/expense-repository.interface";
import { CreateExpenseOccurenceUseCase } from 'apps/expense-app/src/domain/use-cases/expense-occurrence/create-expense-occurrence.case';
import { ExpenseOccurrenceRepository } from 'apps/expense-app/src/domain/repositories/expense-occurrence-repository.interface';

describe('Test create expense occurence use-case', () => {
  let expenseRepository: Mock<ExpenseRepository>;
  let expenseOccurrenceRepository: ExpenseOccurrenceRepository

  beforeEach(() => {
    expenseRepository = mock<ExpenseRepository>();
    expenseOccurrenceRepository = mock<ExpenseOccurrenceRepository>();
  });


  test('Should create an instance of CreateExpenseOccurenceUseCase', () => {
    const useCase = new CreateExpenseOccurenceUseCase(expenseRepository, expenseOccurrenceRepository)
    expect(useCase).not.toBeNull()
  })
})