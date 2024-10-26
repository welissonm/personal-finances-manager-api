import { Injectable } from "@nestjs/common";
import { ExpenseCategoryService } from "../../services/expense-category.service";
import { IdCriterial } from "../../query-criterias/id-criteria.interface";
import { InputUseCase } from "../interfaces/input-use-case.interface";

@Injectable()
export class DisableExpenseCategoryUseCase implements InputUseCase<IdCriterial> {
  constructor(private readonly service: ExpenseCategoryService){}

  async execute(idCriteria: IdCriterial): Promise<void>{
    await this.service.disableCategory(idCriteria);
  }
}