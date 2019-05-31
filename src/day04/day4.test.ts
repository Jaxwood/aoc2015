import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day4 } from './day4';

describe('day4', () => {
  const testcasesA = [['abcdef', '609043'], ['pqrstuv', '1048970']];
  describe.each(testcasesA)('a', (input, expected) => {
    it('should calculate', () => {
      expect(day4(5, input)).toBe(parseInt(expected, 10));
    });
  });

  it('should find solution for day4a', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day4(5, input);
    expect(actual).toBe(117946);
  });

  it('should find solution for day4b', async () => {
    const input = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'utf-8'
    );
    const actual = day4(6, input);
    expect(actual).toBe(3938038);
  });
});
