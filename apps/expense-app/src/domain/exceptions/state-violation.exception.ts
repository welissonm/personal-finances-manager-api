import { BusinessException } from "./business.exception";

export class StateViolationException extends BusinessException {

  constructor(readonly state: string, message?: string){
    super(message ?? `a state violation failure occurred ${state}`)
  }
}