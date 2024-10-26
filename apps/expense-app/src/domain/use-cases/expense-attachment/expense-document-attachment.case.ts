import { Logger } from '@nestjs/common';
import { ExpenseDocument } from '../../models/expense';
import { IExpenseDocumentAttachmentService } from '../../services/expense-document-attachment.service';
import { UseCase } from '../interfaces/use-case.interface';

export class ExpenseDocumentAttachmentUseCase
  implements UseCase<ExpenseDocument, string>
{
  constructor(
    private readonly logger: Logger,
    private readonly expenseDocumentService: IExpenseDocumentAttachmentService,
  ) {}
  async execute(input: ExpenseDocument): Promise<string> {
    try {
      const exists = await this.expenseDocumentService.exists({
        integrityHash: input.integrityHash,
        expenseId: input.expenseId,
      });
      if (exists) {
        this.logger.log(
          `file has already been attached to the expense id=${input.expenseId}`,
        );
        return exists.id;
      }

      const persisted = await this.expenseDocumentService.create(input);
      this.logger.log(
        `file attached to expense id=${input.expenseId} successfully. expenseDocumentId=${persisted.id}`,
      );
      return persisted.id;
    } catch (e) {
      this.logger.error(`failure to attach expense document to expense id=${input.expenseId}`, e);
    }
  }
}
