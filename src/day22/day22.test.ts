import { day22a } from './day22';

describe('day22', () => {
  describe('a', () => {
    it('should find the least amount of mana to defeat the boss', () => {
      expect(day22a({ name: 'boss', hp: 71, dmg: 10, mana: 0, armor: 0, spend: 0 }, (a) => undefined)).toBe(1824);
    });
  });
  describe('b', () => {
    it('should find the least amount of mana to defeat the boss on hard', () => {
      expect(day22a({ name: 'boss', hp: 71, dmg: 10, mana: 0, armor: 0, spend: 0 }, (a) => a.player.hp -= 1)).toBe(1937);
    });
  });
});
