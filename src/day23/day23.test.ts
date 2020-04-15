import fsReadfilePromise from 'fs-readfile-promise';
import os from 'os';
import path from 'path';
import { day23 } from './day23';

describe('day23', () => {
  describe('a', () => {
    it('should find the value of the register', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      expect(day23(input.split(os.EOL), 0)).toBe(184);
    });
  });
  describe('b', () => {
    it('should find the value of the register', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      expect(day23(input.split(os.EOL), 1)).toBe(231);
    });
  });
});