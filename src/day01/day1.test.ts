import fsReadfilePromise from 'fs-readfile-promise';
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

  it('day1a input should equal 280', async () => {
    const input = await fsReadfilePromise('./src/day01/input.txt', 'utf-8');
    const actual = day1a(input);
    expect(actual).toBe(280);
  });

  it('day1b input should equal 1797', async () => {
    const input = await fsReadfilePromise('./src/day01/input.txt', 'utf-8');
    const actual = day1b(input);
    expect(actual).toBe(1797);
  });
});
