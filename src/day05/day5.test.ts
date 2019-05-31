import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day5a } from './day5';

describe('day5', () => {
  it('should calculate', () => {
    const input: string[] = [
      'ugknbfddgicrmopn',
      'aaa',
      'jchzalrnumimnmhp',
      'haegwjzuvuyypxyu',
      'dvszwmarrgswjxmb',
    ];
    expect(day5a(input)).toBe(2);
  });

  it('should calculate solution for day5a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day5a(input.split('\n'));
    expect(actual).toBe(255);
  });
});
