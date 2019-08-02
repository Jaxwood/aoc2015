import * as _ from 'lodash';

export function day17a(liters: number, containers: number[]): number {
  if (liters === 0) {
    return 1;
  }
  else if (containers.length === 0 || liters < 0) {
    return 0;
  }
  else {
    return day17a(liters - containers[0], containers.slice(1)) + day17a(liters, containers.slice(1));
  }
}

export function day17b(liters: number, containers: number[]): number {
  const combinations = combine(liters, containers, [], []);
  const minLength = (_.minBy(combinations, c => c.length) || []).length;
  if (minLength) {
    return combinations.filter(c => c.length === minLength).length;
  }
  return 0;
}

function combine(liters: number, containers: number[], steps: number[], result: number[][]): number[][] {
  if (liters === 0) {
    result.push(steps);
    return result;
  }
  else if (containers.length === 0 || liters < 0) {
    return [];
  }
  else {
    return combine(liters - containers[0], containers.slice(1), steps.concat(containers[0]), result).concat(combine(liters, containers.slice(1), steps, []));
  }
}