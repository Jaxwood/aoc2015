import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day7a } from './day7';

describe('day7', () => {
  it('should calculate bitwise operations', () => {
    const operations = [
      '123 -> x',
      '456 -> y',
      'x AND y -> d',
      'x OR y -> e',
      'x LSHIFT 2 -> f',
      'y RSHIFT 2 -> g',
      'NOT x -> h',
      'NOT y -> i',
    ];
    const actual = day7a(operations);
    expect(actual.get('d')).toBe(72);
    expect(actual.get('e')).toBe(507);
    expect(actual.get('f')).toBe(492);
    expect(actual.get('g')).toBe(114);
    expect(actual.get('h')).toBe(65412);
    expect(actual.get('i')).toBe(65079);
    expect(actual.get('x')).toBe(123);
    expect(actual.get('y')).toBe(456);
  });

  it('should get the solution to day7a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day7a(input.split('\r\n'));
    expect(actual.get('a')).toBe(3176);
  });
});
