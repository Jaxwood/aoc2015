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
    const r = register.has(this.left);
    if (l && r) {
      return new Result(
        this.target,
        this.and(register.get(this.left) || 0, register.get(this.right) || 0),
        true
      );
    } else {
      return new Result('', 0, false);
    }
  }

  private toBinary(target: number): string {
    return _.padStart(target.toString(2), 16, '0');
  }

  private and(left: number, right: number): number {
    return parseInt(
      _.zip([...this.toBinary(left)], [...this.toBinary(right)])
        .map(([l, r]) => (this.toInt(l || '') & this.toInt(r || '')).toString())
        .join(''),
      2
    );
  }

  private toInt(num: string) {
    return parseInt(num, 10);
  }
}
