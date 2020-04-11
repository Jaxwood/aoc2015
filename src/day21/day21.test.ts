import { day21a, day21b, Player } from './day21';

describe('day21', () => {
  describe('a', () => {
    it('should find the cheapest set of armor and weapon', () => {
      expect(day21a(new Player(109, 2, 8))).toBe(111);
    });
  });
  describe('b', () => {
    it('should find the most expensive set of armor and weapon', () => {
      expect(day21b(new Player(109, 2, 8))).toBe(188);
    });
  });
});