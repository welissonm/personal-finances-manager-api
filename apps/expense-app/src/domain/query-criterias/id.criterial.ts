import { IdCriterial } from "./id-criteria.interface";

export class IdCriterialImp implements IdCriterial {
  #id: string;

  get id(){
    return this.#id;
  }

}