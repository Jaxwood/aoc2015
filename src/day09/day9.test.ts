import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day9a } from './day9';

describe('day9', () => {
  it('should find shortest distance', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'a.txt'),
      'utf-8'
    );
    const actual = day9a(input.split('\r\n'));
    expect(actual).toBe(605);
  });
});