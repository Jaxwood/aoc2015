import fsReadfilePromise from 'fs-readfile-promise';
import os from 'os';
import path from 'path';
import { day17a, day17b } from './day17';

describe('day17', () => {
  describe('a', () => {
    it('should find max combinations', () => {
      const liters = 25;
      const containers = [20, 10, 15, 5, 5];
      expect(day17a(liters, containers)).toBe(4)
    });

    it('should find max combinations for puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day17a(150, input.split(os.EOL).map(c => parseInt(c, 10)));
      expect(actual).toBe(1638);
    });
  });

  describe('b', () => {
    it('should find max combinations', () => {
      const liters = 25;
      const containers = [20, 10, 15, 5, 5];
      expect(day17b(liters, containers)).toBe(3)
    });

    it('should find max combinations for puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day17b(150, input.split(os.EOL).map(c => parseInt(c, 10)));
      expect(actual).toBe(17);
    });
  });
});