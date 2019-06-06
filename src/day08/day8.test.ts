// tslint:disable: quotemark
import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day8a } from './day8';

describe('day8', () => {
  it('should calculate characters', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'a.txt'),
      'utf-8'
    );
    const actual = day8a(input.split('\r\n'));
    expect(actual).toBe(12);
  });

  it('should get the solution to day8a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    // remove start and end qoute
    const actual = day8a(input.split('\r\n'));
    expect(actual).toBe(1350);
  });
});
