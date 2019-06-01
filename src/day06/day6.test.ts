import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day6a, day6b } from './day6';

describe('day6', () => {
  it('should get the solution to day6a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day6a(input.split('\n'));
    expect(actual).toBe(377891);
  });

  it('should get the solution to day6b', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day6b(input.split('\n'));
    expect(actual).toBe(377891);
  });
});
