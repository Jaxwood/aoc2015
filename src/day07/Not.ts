// tslint:disable: no-bitwise
import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class Not implements IOperation {
  constructor(private left: string, private target: string) {}

  public execute(register: Map<string, number>): Result {
    const l = register.has(this.left);
    if (l) {
      const ll = register.get(this.left);
      if (ll === undefined) {
        throw new Error('not');
      }
      return new Result(this.target, 0xffff & ~ll, true);
    } else {
      return new Result('', 0, false);
    }
  }
}
