// tslint:disable: no-bitwise
import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class And implements IOperation {
  constructor(
    private left: string,
    private right: string,
    private target: string
  ) {}

  public execute(register: Map<string, number>): Result {
    const l = this.toInt(this.left)
      ? this.toInt(this.left)
      : register.has(this.left);
    const r = register.has(this.right);
    if (l && r) {
      const ll = this.toInt(this.left)
        ? this.toInt(this.left)
        : register.get(this.left);
      const rr = register.get(this.right);
      if (ll === undefined) {
        throw new Error('and');
      }
      if (rr === undefined) {
        throw new Error('and');
      }
      return new Result(this.target, 0xffff & ll & (0xffff & rr), true);
    } else {
      return new Result('', 0, false);
    }
  }
  private toInt(num: string) {
    return parseInt(num, 10);
  }
}
