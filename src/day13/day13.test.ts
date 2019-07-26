import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day13 } from './day13';

describe('day13', () => {
  it('should find best seating arrangement', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day13(input.split('\r\n'));
      expect(actual).toBe(709);
  });
});