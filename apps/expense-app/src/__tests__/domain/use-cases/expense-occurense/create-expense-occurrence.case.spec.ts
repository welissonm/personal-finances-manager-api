import { Mock, mock } from 'ts-jest-mocker';

import { ExpenseRepository } from "../../../../domain/repositories/expense-repository.interface";
import { CreateExpenseOccurenceUseCase } from '../../../../domain/use-cases/expense-occurrence/create-expense-occurrence.case';
import { ExpenseOccurrenceRepository } from '../../../../domain/repositories/expense-occurrence-repository.interface';
import { Expense, ExpenseFrequency, ExpenseOccurrence, ExpenseStatus, ExpenseType } from '../../../../domain/models/expense';
import { CreateExpenseOccurrenceUseCaseInput } from '../../../../domain/use-cases/expense-occurrence/expense-occurrence-use-case.type';
import { randomUUID } from 'node:crypto';

jest.mock("../../../../domain/repositories/expense-repository.interface")
jest.mock("../../../../domain/repositories/expense-occurrence-repository.interface")

describe('Test create expense occurence use-case', () => {
  let expenseRepository: Mock<ExpenseRepository>;
  let expenseOccurrenceRepository: Mock<ExpenseOccurrenceRepository>

  beforeEach(() => {
    jest.clearAllMocks()
    expenseRepository = mock<ExpenseRepository>();
    expenseOccurrenceRepository = mock<ExpenseOccurrenceRepository>();
  });


  test('Should create an instance of CreateExpenseOccurenceUseCase', () => {
    const useCase = new CreateExpenseOccurenceUseCase(expenseRepository, expenseOccurrenceRepository)
    expect(useCase).not.toBeNull()
  });

  test('should successfully create an expense occurrence', async () => {
    expect.assertions(5);
  
    const expense: Expense = {
      id: '1',
      externalCode: randomUUID(),
      originalAmount: 100n,
      categoryId: '1',
      category: undefined,
      type: ExpenseType.BILLS_TO_PAY,
      status: ExpenseStatus.OPEN,
      createdAt: new Date(),
      dueDate: new Date(new Date().getTime() + 30*24*60*60*1000),
      isRecurring: true,
      frequency: ExpenseFrequency.MONTHLY,
      occurrences: [],
      description: 'expense test',
      documents: []
    }
    
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
    expenseOccurrenceRepository.save.mockReturnValue(Promise.resolve({...expenseOccurrenceStub, id: '1' }))

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