import { Mock, mock } from 'ts-jest-mocker';

import { ExpenseRepository } from "apps/expense-app/src/domain/repositories/expense-repository.interface";
import { CreateExpenseOccurenceUseCase } from '../../../../domain/use-cases/expense-occurrence/create-expense-occurrence.case';
import { ExpenseOccurrenceRepository } from '../../../../domain/repositories/expense-occurrence-repository.interface';
import { Expense, ExpenseOccurrence, ExpenseStatus } from '../../../../domain/models/expense';
import { CreateExpenseOccurrenceUseCaseInput } from '../../../../domain/use-cases/expense-occurrence/expense-occurrence-use-case.type';

describe('Test create expense occurence use-case', () => {
  let expenseRepository: Mock<ExpenseRepository>;
  let expenseOccurrenceRepository: Mock<ExpenseOccurrenceRepository>

  beforeEach(() => {
    expenseRepository = mock<ExpenseRepository>();
    expenseOccurrenceRepository = mock<ExpenseOccurrenceRepository>();
  });


  test('Should create an instance of CreateExpenseOccurenceUseCase', () => {
    const useCase = new CreateExpenseOccurenceUseCase(expenseRepository, expenseOccurrenceRepository)
    expect(useCase).not.toBeNull()
  });

  test('should successfully create an expense occurrence', async () => {
  
    const expense: Expense = mock<Expense>()
    const expenseOccurrenceStub: ExpenseOccurrence = {
      id: undefined, 
      expenseId: '1',
      expense: null,
      status: ExpenseStatus.OPEN,
      paidAmout: 0n,
      dueDate: new Date(2025, 1 ,1)
    }
    expenseRepository.findById.mockReturnValue(Promise.resolve(expense));
    expenseOccurrenceRepository.create.mockReturnValue(Promise.resolve(expenseOccurrenceStub));
    expenseOccurrenceRepository.save.mockReturnValue(Promise.resolve({...expenseOccurrenceStub, id: '1'}))

    const useCaseInput: CreateExpenseOccurrenceUseCaseInput  =  {
      expenseId: expenseOccurrenceStub.expenseId,
      dueDate: expenseOccurrenceStub.dueDate
    }

    const useCase = new CreateExpenseOccurenceUseCase(expenseRepository, expenseOccurrenceRepository)
    const result = await useCase.execute(useCaseInput)
    expect(result).toBeDefined()
    expect(result.id).toBeDefined()
    expect(result.dueDate).toEqual(expenseOccurrenceStub.dueDate)
    expect(result.expenseId).toEqual(expenseOccurrenceStub.expenseId)
    expect(result.status).toEqual(ExpenseStatus.OPEN)
  });

  test('should fail when putting in an invalid or non-existent expenseId', async ()=> {
    expenseRepository.findById.mockResolvedValue(undefined)

    const useCaseInput: CreateExpenseOccurrenceUseCaseInput  =  {
      expenseId: 'invalid',
      dueDate: new Date(2025,1,1)
    }
    
    const useCase = new CreateExpenseOccurenceUseCase(expenseRepository, expenseOccurrenceRepository)
    expect(() => useCase.execute(useCaseInput)).rejects.toThrow(`expense with id ${useCaseInput.expenseId} not found`)
  });
})