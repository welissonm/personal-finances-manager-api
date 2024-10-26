import { Inject, Injectable } from "@nestjs/common";
import { ExpenseCategory } from "../models/expense";
import { ExpenseCategoryCriteria } from "../query-criterias/expense-category.criteria";
import { IdCriterial } from "../query-criterias/id-criteria.interface";
import { DRIZZLE_PROVIDER } from "../../infrastructure/database/dizzle/drizzle.module";
import { DbConnectionType } from "../../infrastructure/database/dizzle/@types/drizzle";
import { expenseCategory } from "../../infrastructure/database/schema";
import { ExpenseCategoryEntity } from "../../infrastructure/database/entities/expense/expense-category.entity";

@Injectable()
export class ExpenseCategoryService {

  constructor(@Inject(DRIZZLE_PROVIDER) private readonly drizzleProvider: DbConnectionType){}
  
  public async create( newExpenseCategory: ExpenseCategory): Promise<ExpenseCategory> {
    const result = await this.drizzleProvider.insert(expenseCategory).values(newExpenseCategory).returning();
    return new ExpenseCategoryEntity({ ...result.at(0), id: result.at(0).id.toString() });
  
  }

  public async findById<T extends IdCriterial>(idCriteria: T): Promise<ExpenseCategory | undefined>{
    throw new Error("Method not implemented.");
  }

  public async findCategory(criteria: ExpenseCategoryCriteria): Promise< ExpenseCategory[]>{
    return [];
  }

  public async exists(criteria: ExpenseCategoryCriteria): Promise<boolean>{
    return false;
  }

  public async listAll(): Promise<ExpenseCategory[]> {
    return [];
  }

  public async disableCategory<T extends IdCriterial>(idCriteria: T): Promise<ExpenseCategory | undefined>{
    throw new Error("Method not implemented.");
  }

}