import _ from 'lodash';
import { IOperation } from './day7';
import Result from './Result';

export class Not implements IOperation {
  constructor(private left: string, private target: string) {}

  public execute(register: Map<string, number>): Result {
    const l = register.has(this.left);
    if (l) {
      return new Result(
        this.target,
        this.complement(register.get(this.left) || 0),
        true
      );
    } else {
      return new Result('', 0, false);
    }
  }

  private toBinary(target: number): string {
    return _.padStart(target.toString(2), 16, '0');
  }

  private complement(target: number): number {
    let result = '';
    for (const t of this.toBinary(target)) {
      result += t === '1' ? '0' : '1';
    }
    return parseInt(result, 2);
  }
}
