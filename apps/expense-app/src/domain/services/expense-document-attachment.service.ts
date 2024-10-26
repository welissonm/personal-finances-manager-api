import { ExpenseDocument } from "../models/expense";
import { IdCriterial, IExpenseDocumentCriteria } from "../query-criterias";

export interface IExpenseDocumentAttachmentService {

  findByCriteria(id: IdCriterial): Promise<undefined | ExpenseDocument>

  findByCriteria(criterial: IExpenseDocumentCriteria): Promise<undefined | ExpenseDocument>

  exists(criterial: IExpenseDocumentCriteria): Promise<undefined | Partial<ExpenseDocument>>

  create(expenseDocument: ExpenseDocument): Promise<ExpenseDocument>

}