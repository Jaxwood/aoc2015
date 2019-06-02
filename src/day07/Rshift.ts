import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class Rshift implements IOperation {
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
        this.rshift(register.get(this.left) || 0, this.toInt(this.right)),
        true
      );
    } else {
      return new Result('', 0, false);
    }
  }

  private toBinary(target: number): string {
    return _.padStart(target.toString(2), 16, '0');
  }

  private rshift(num: number, times: number): number {
    return parseInt(
      _.take(
        _.fill(Array(times), '0').concat([...this.toBinary(num)]),
        16
      ).join(''),
      2
    );
  }

  private toInt(num: string) {
    return parseInt(num, 10);
  }
}
