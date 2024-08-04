import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseAppController } from './expense-app.controller';
import { ExpenseAppService } from './expense-app.service';

describe('ExpenseAppController', () => {
  let expenseAppController: ExpenseAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseAppController],
      providers: [ExpenseAppService],
    }).compile();

    expenseAppController = app.get<ExpenseAppController>(ExpenseAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(expenseAppController.getHello()).toBe('Hello World!');
    });
  });
});
