import { Stream } from "node:stream";

export interface ExpenseFileAttachment {
  expenseId: string;
  expenseOcurrenceId: string;
  data: Stream | BinaryData;
  metadata: {
    name: string;
    extension: string;
    bytes: number;
  }
}