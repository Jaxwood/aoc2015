import { day25 } from './day25';

describe('day25', () => {
  describe('a', () => {
    it('find the number at the row and column', () => {
      expect(day25(3010, 3019)).toBe(8997277);
    });
  });
});
