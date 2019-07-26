import * as _ from 'lodash';

export function day12(input: any, filterRed: boolean = false): number {
  const queue = [input];
  let sum = 0;
  while(queue.length > 0) {
    const next = queue.shift();
    if (_.isNumber(next)) {
      sum += next;
    }
    else if (next instanceof Array) {
      queue.push(...next);
    } else if (_.isObject(next)) {
      const values = Object.values(next);
      const containsRed = filterRed && values.some(c => c === 'red');
      if (!containsRed) {
        queue.push(values);
      }
    }
  }
  return sum;
}