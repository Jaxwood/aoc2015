import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day5a, day5b } from './day5';

describe('day5', () => {
  describe('a', () => {
    it('should calculate nice words', () => {
      const input: string[] = [
        'ugknbfddgicrmopn',
        'aaa',
        'jchzalrnumimnmhp',
        'haegwjzuvuyypxyu',
        'dvszwmarrgswjxmb',
      ];
      expect(day5a(input)).toBe(2);
    });

    it('should calculate solution for day5a', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day5a(input.split('\n'));
      expect(actual).toBe(255);
    });
  });

  describe('b', () => {
    it('should calculate nice words', () => {
      const input: string[] = [
        'qjhvhtzxzqqjkmpb',
        'xxyxx',
        'uurcxstgmygtbstg',
        'ieodomkazucvgmuy',
        'aaa',
      ];
      expect(day5b(input)).toBe(2);
    });

    it('should calculate solution for day5b', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day5b(input.split('\n'));
      expect(actual).toBe(55);
    });
  });
});
