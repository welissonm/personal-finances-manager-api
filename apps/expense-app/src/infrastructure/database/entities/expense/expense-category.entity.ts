import { ExpenseCategory } from '../../../../domain/models/expense';
import { Entity } from "../entity.interface";

export class ExpenseCategoryEntity implements ExpenseCategory, Entity {
  id: string | undefined;
  name: string;
  description?: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(obj: Partial<ExpenseCategory & Entity>) {
    this.id = obj?.id;
    this.name = obj?.name;
    this.description = obj?.description;
    this.deleted = obj?.deleted
    this.createdAt = obj?.createdAt;
    this.updatedAt = obj?.updatedAt;
    this.deletedAt = obj?.deletedAt;
  }
}