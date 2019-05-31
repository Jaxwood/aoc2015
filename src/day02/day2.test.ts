import { day2a } from './day2';
describe('day2a', () => {
  const testcases = [['2x3x4', '58'], ['1x1x10', '43']];
  describe.each(testcases)('', (input, expected) => {
    it('should calculate size', () => {
      expect(day2a(input)).toBe(parseInt(expected, 10));
    });
  });
});
