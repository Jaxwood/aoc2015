import * as _ from 'lodash';

export function day2a(input: string[]): number {
  return _.sum(input.map(paperSize));
}

export function day2b(input: string[]): number {
  return _.sum(input.map(ribonSize));
}

function toInt(numberAsString: string): number {
  return parseInt(numberAsString, 10);
}

function paperSize(input: string): number {
  const [l, w, h] = input.split('x').map(toInt);
  const side1 = 2 * l * w;
  const side2 = 2 * w * h;
  const side3 = 2 * h * l;
  const minside = _.min([l * w, w * h, h * l]) || 0;
  return side1 + side2 + side3 + minside;
}

function ribonSize(input: string): number {
  const [l, w, h] = input
    .split('x')
    .map(toInt)
    .sort();
  return 2 * l + 2 * w + l * w * h;
}
