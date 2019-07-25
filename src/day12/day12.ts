import * as _ from 'lodash';

export function day12a(input: any): number {
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
      queue.push(...Object.values(next));
    }
  }
  return sum;
}