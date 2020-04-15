import fsReadfilePromise from 'fs-readfile-promise';
import os from 'os';
import path from 'path';
import { day24 } from './day24';

describe('day24', () => {
  describe('a', () => {
    it('find the best arrangement of gifts', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      expect(day24(input.split(os.EOL), 3)).toBe(99);
    });
    it('find the best arrangement of gifts for the solution input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      expect(day24(input.split(os.EOL), 3)).toBe(10723906903);
    });
  });
  describe('b', () => {
    it('find the best arrangement of gifts', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      expect(day24(input.split(os.EOL), 4)).toBe(44);
    });
    it('find the best arrangement of gifts for the solution input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      expect(day24(input.split(os.EOL), 4)).toBe(74850409);
    });
  });
});