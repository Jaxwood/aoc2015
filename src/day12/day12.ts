import * as _ from 'lodash';

export function day12a(input: any): number {
  let sum = 0;
  if (input instanceof Array) {
    for (const i of input) {
      if (_.isNumber(i)) {
        sum += i;
      }
      else {
        sum += day12a(i);
      }
    }
  } else {
    sum += day12a(Object.values(input));
  }
  return sum;
}