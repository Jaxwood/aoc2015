import * as _ from 'lodash';
export function day2a(input: string): number {
  const [l, w, h] = input.split('x').map(s => parseInt(s, 10));
  const side1 = 2 * l * w;
  const side2 = 2 * w * h;
  const side3 = 2 * h * l;
  const minside = _.min([l * w, w * h, h * l]) || 0;
  return side1 + side2 + side3 + minside;
}
