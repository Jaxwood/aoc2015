import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class Set implements IOperation {
  constructor(private left: string, private target: string) {}

  public execute(register: Map<string, number>): Result {
    if (parseInt(this.left, 10)) {
      return new Result(this.target, parseInt(this.left, 10), true);
    } else if (register.has(this.left)) {
      return new Result(this.target, register.get(this.left) || 0, true);
    } else {
      return new Result('', 0, false);
    }
  }
}
