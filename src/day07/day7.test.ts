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
    expect(day7a(operations, 'd')).toBe(72);
    expect(day7a(operations, 'e')).toBe(507);
    expect(day7a(operations, 'f')).toBe(492);
    expect(day7a(operations, 'g')).toBe(114);
    // expect(day7a(operations, 'h')).toBe(65412);
    // expect(day7a(operations, 'i')).toBe(65079);
    expect(day7a(operations, 'x')).toBe(123);
    expect(day7a(operations, 'y')).toBe(456);
  });

  it('should get the solution to day7a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day7a(input.split('\n'), 'a');
    expect(actual).toBe(377891);
  });
});
