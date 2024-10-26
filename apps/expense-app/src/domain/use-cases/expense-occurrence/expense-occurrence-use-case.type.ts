import { DigitalDocument } from "../../models/digital-document"

export type CreateExpenseOccurrenceUseCaseInput = {
  expenseId: string
  dueDate: Date,
  document?: DigitalDocument;
}