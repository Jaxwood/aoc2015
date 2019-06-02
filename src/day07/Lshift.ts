import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class Lshift implements IOperation {
  constructor(
    private left: string,
    private right: string,
    private target: string
  ) {}

  public execute(register: Map<string, number>): Result {
    const l = register.has(this.left);
    if (l) {
      return new Result(
        this.target,
        this.lshift(register.get(this.left) || 0, this.toInt(this.right)),
        true
      );
    } else {
      return new Result('', 0, false);
    }
  }
  private toBinary(target: number): string {
    return _.padStart(target.toString(2), 16, '0');
  }

  private lshift(num: number, times: number): number {
    return parseInt(
      _.takeRight(
        [...this.toBinary(num)].concat(_.fill(Array(times), '0')),
        16
      ).join(''),
      2
    );
  }

  private toInt(num: string) {
    return parseInt(num, 10);
  }
}
