import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day1a, day1b } from './day1';

describe('day1', () => {
  const testCases = [
    ['(((', '3'],
    ['()()', '0'],
    ['(()(()(', '3'],
    ['(())', '0'],
    ['())', '-1'],
    ['))(', '-1'],
    [')))', '-3'],
    [')())())', '-3'],
  ];
  describe.each(testCases)('a', (input, expected) => {
    it(`${input} should equal ${expected}`, () => {
      expect(day1a(input)).toBe(parseInt(expected, 10));
    });
  });

  it('should calculate solution for day1a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day1a(input);
    expect(actual).toBe(280);
  });

  it('should calculate solution for day1b', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day1b(input);
    expect(actual).toBe(1797);
  });
});
