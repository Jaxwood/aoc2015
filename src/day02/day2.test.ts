import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day2a } from './day2';

describe('day2a', () => {
  const testcases = [['2x3x4', '58'], ['1x1x10', '43']];
  describe.each(testcases)('', (input, expected) => {
    it('should calculate size', () => {
      expect(day2a([input])).toBe(parseInt(expected, 10));
    });
  });

  it('should calculate soultion', async () => {
    const fileContent = await fsReadfilePromise(
      path.resolve(__dirname, 'input.txt'),
      'UTF-8'
    );
    const lines = fileContent.split('\n');
    expect(day2a(lines)).toBe(1588178);
  });
});
