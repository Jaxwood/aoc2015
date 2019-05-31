import fsReadfilePromise from 'fs-readfile-promise';
import { day1 } from './day1';

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
  describe.each(testCases)('%s', (input, expected) => {
    it(`should equal ${expected}`, () => {
      expect(day1(input)).toBe(parseInt(expected, 10));
    });
  });

  it('day1 input should equal 280', async () => {
    const input = await fsReadfilePromise('./src/day1/input.txt', 'utf-8');
    const actual = day1(input);
    expect(actual).toBe(280);
  });
});
