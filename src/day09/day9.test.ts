import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day9a, day9b } from './day9';

describe('day9', () => {
  it('should find shortest distance', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'a.txt'),
      'utf-8'
    );
    const actual = day9a(input.split('\r\n'));
    expect(actual).toBe(605);
  });

  it('should find shortest distance for input', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day9a(input.split('\r\n'));
    expect(actual).toBe(117);
  });

  it('should find longest distance', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'a.txt'),
      'utf-8'
    );
    const actual = day9b(input.split('\r\n'));
    expect(actual).toBe(982);
  });

  it('should find longest distance for input', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day9b(input.split('\r\n'));
    expect(actual).toBe(909);
  });
});