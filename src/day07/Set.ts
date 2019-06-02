import { IOperation } from './day7';
import Result from './Result';

export class Set implements IOperation {
  constructor(private left: string, private target: string) {}

  public execute(register: Map<string, number>): Result {
    return new Result(this.target, parseInt(this.left, 10), true);
  }
}
