import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
