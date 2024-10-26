import { ExpenseCategoryEntity } from "../entities/expense/expense-category.entity";
import { DatabaseRepository } from "./interfaces/database-repostirory.interface";

export class ExpenseCategoryRepository implements DatabaseRepository<ExpenseCategoryEntity, string> {
  constructor(private readonly ){

  }

  findOne(): Promise<ExpenseCategoryEntity> {
    throw new Error("Method not implemented.");
  }
  findMany(): Promise<ExpenseCategoryEntity[]> {
    throw new Error("Method not implemented.");
  }
  save(entity: Partial<ExpenseCategoryEntity>): Promise<ExpenseCategoryEntity> {
    throw new Error("Method not implemented.");
  }
  update(entity: Partial<ExpenseCategoryEntity>): Promise<ExpenseCategoryEntity> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<ExpenseCategoryEntity> {
    throw new Error("Method not implemented.");
  }
  insert(entity: Partial<ExpenseCategoryEntity>): Promise<ExpenseCategoryEntity> {
    throw new Error("Method not implemented.");
  }
  softDelete(id: string): Promise<ExpenseCategoryEntity> {
    throw new Error("Method not implemented.");
  }
  recover(id: string): Promise<ExpenseCategoryEntity> {
    throw new Error("Method not implemented.");
  }
  
}