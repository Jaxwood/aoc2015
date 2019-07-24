import { day10 } from './day10';
  describe.each([
    [1, 11],
    [11, 21],
    [21, 1211],
    [1211, 111221],
    [111221, 312211],
  ])('look and say for %i', (input: number, expected: number) => {
    test(`returns ${expected}`, () => {
      const actual = day10(input, 1);
      expect(actual).toBe(expected.toString());
    });
  });

  describe('day10', () => {
    it('should find result for day10a input', () => {
      const actual = day10(3113322113, 40);
      expect(actual.length).toBe(329356);
    })
    it('should find result for day10b input', () => {
      const actual = day10(3113322113, 50);
      expect(actual.length).toBe(4666278);
    })
  })