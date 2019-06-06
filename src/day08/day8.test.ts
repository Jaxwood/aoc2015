// tslint:disable: quotemark
import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day8a, day8b } from './day8';

describe('day8', () => {
  it('should calculate characters for a', async () => {
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
    const actual = day8a(input.split('\r\n'));
    expect(actual).toBe(1350);
  });

  it('should calculate characters for b', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'a.txt'),
      'utf-8'
    );
    const actual = day8b(input.split('\r\n'));
    expect(actual).toBe(19);
  });

  it('should get the solution to day8b', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day8b(input.split('\r\n'));
    expect(actual).toBe(2085);
  });
});
