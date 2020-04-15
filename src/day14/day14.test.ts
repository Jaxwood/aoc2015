import fsReadfilePromise from 'fs-readfile-promise';
import os from 'os';
import path from 'path';
import { day14a, day14b } from './day14';

describe('day14', () => {
  describe('a', () => {
    it('should find the reindeer that travelled the furthers', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      const actual = day14a(input.split(os.EOL), 1000);
      expect(actual).toBe(1120);
    });

    it('should find the reindeer that travelled the furthers with puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day14a(input.split(os.EOL), 2503);
      expect(actual).toBe(2655);
    });
  });

  describe('b', () => {
    it('should find the reindeer that travelled the furthers', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      const actual = day14b(input.split(os.EOL), 1000);
      expect(actual).toBe(689);
    });

    it('should find the reindeer that travelled the furthers with puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day14b(input.split(os.EOL), 2503);
      expect(actual).toBe(1059);
    });
  });
});