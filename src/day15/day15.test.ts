import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day15a } from './day15';

describe('day15', () => {
  it('should find best reciepe', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      const actual = day15a(input.split('\r\n'));
      expect(actual).toBe(62842880);
  });
});