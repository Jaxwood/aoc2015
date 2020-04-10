import { day20a, day20b } from './day20';

describe('day20', () => {
  describe('a', () => {
    it('should find house no', () => {
      expect(day20a(33100000)).toBe(776160);
    });
  });
  describe('b', () => {
    it('should find house no', () => {
      expect(day20b(33100000)).toBe(786240);
    });
  });
});