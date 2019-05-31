import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day2a, day2b } from './day2';

describe('day2', () => {
  const testcasesA = [['2x3x4', '58'], ['1x1x10', '43']];
  const testcasesB = [['4x3x2', '34'], ['1x10x1', '14']];
  describe.each(testcasesA)('a', (input, expected) => {
    it('should calculate size', () => {
      expect(day2a([input])).toBe(parseInt(expected, 10));
    });
  });

  describe.each(testcasesB)('b', (input, expected) => {
    it('should calculate size', () => {
      expect(day2b([input])).toBe(parseInt(expected, 10));
    });
  });

  it('should calculate soultion for a', async () => {
    const fileContent = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'UTF-8'
    );
    const lines = fileContent.split('\n');
    expect(day2a(lines)).toBe(1588178);
  });

  it('should calculate soultion for b', async () => {
    const fileContent = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'UTF-8'
    );
    const lines = fileContent.split('\n');
    expect(day2b(lines)).toBe(3783758);
  });
});
