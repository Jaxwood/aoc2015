import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day14 } from './day14';

describe('day14', () => {
  it('should find the reindeer that travelled the furthers', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'a.txt'),
      'utf-8'
    );
    const actual = day14(input.split('\r\n'), 1000);
    expect(actual).toBe(1120);
  });
});