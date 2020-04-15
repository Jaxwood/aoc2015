import fsReadfilePromise from 'fs-readfile-promise';
import os from 'os';
import path from 'path';
import { day13a, day13b } from './day13';

describe('day13', () => {
  it('should find best seating arrangement', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      const actual = day13a(input.split(os.EOL));
      expect(actual).toBe(330);
  });
  it('should find best seating arrangement for puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day13a(input.split(os.EOL));
      expect(actual).toBe(709);
  });
  it('should find best seating arrangement with neutral person added', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day13b(input.split(os.EOL));
      expect(actual).toBe(668);
  });
});