import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day18a } from './day18';

describe('day18', () => {
  describe('a', () => {
    it('should find number of lights on', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      expect(day18a(input.split('\r\n'), 4)).toBe(4);
    });
    it('should find number of lights on for puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      expect(day18a(input.split('\r\n'), 100)).toBe(821);
    });
  });
})