import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day3a, day3b } from './day3';

describe('day3', () => {
  const testcasesA = [['>', '2'], ['^>v<', '4'], ['^v^v^v^v^v', '2']];
  const testcasesB = [['^v', '3'], ['^>v<', '3'], ['^v^v^v^v^v', '11']];
  describe.each(testcasesA)('a', (input, expected) => {
    it('should calculate size', () => {
      expect(day3a(input)).toBe(parseInt(expected, 10));
    });
  });

  describe.each(testcasesB)('b', (input, expected) => {
    it('should calculate size', () => {
      expect(day3b(input)).toBe(parseInt(expected, 10));
    });
  });

  it('should calculate solution for day3a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day3a(input);
    expect(actual).toBe(2081);
  });

  it('should calculate solution for day3b', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day3b(input);
    expect(actual).toBe(2341);
  });
});
