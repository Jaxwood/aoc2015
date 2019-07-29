import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day16a } from './day16';

describe('day16', () => {
  describe('a', () => {
    it('should', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day16a(input.split('\r\n'));
      expect(actual).toBe(0);
    });
  });
});