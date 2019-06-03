// tslint:disable: no-bitwise
import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class Or implements IOperation {
  constructor(
    private left: string,
    private right: string,
    private target: string
  ) {}

  public execute(register: Map<string, number>): Result {
    const l = register.has(this.left);
    const r = register.has(this.right);
    if (l && r) {
      const rl = register.get(this.left);
      const rr = register.get(this.right);
      if (rl === undefined) {
        throw Error('or');
      }
      if (rr === undefined) {
        throw Error('or');
      }
      return new Result(this.target, (0xffff & rl) | (0xffff & rr), true);
    } else {
      return new Result('', 0, false);
    }
  }
}
