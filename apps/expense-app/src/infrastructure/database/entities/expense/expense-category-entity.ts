import { ExpenseCategory } from '../../../../domain/models/expense';
import { Entity } from "../entity.interface";

export class ExpenseCategoryEntity implements ExpenseCategory, Entity {
  id: string;
  name: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}