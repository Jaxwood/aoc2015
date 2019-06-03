import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class Set implements IOperation {
  constructor(private left: string, private target: string) {}

  public execute(register: Map<string, number>): Result {
    const reg = register.has(this.left);
    if (!isNaN(parseInt(this.left, 10))) {
      return new Result(this.target, parseInt(this.left, 10), true);
    } else if (reg) {
      const ll = register.get(this.left);
      if (ll === undefined) {
        throw new Error('set');
      }
      return new Result(this.target, ll, true);
    } else {
      return new Result('', 0, false);
    }
  }
}
