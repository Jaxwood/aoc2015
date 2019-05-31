import { Sut } from './day1';

interface TestCase {
  expected: number;
  pattern: string;
}
describe('day1', () => {
  it('should calculate floors', () => {
    const sut = new Sut();
    const input: TestCase[] = [
      {
        expected: 0,
        pattern: '(())',
      },
      {
        expected: 0,
        pattern: '()()',
      },
      {
        expected: 3,
        pattern: '(((',
      },
      {
        expected: 3,
        pattern: '(()(()(',
      },
      {
        expected: 3,
        pattern: '))(((((',
      },
      {
        expected: -1,
        pattern: '())',
      },
      {
        expected: -1,
        pattern: '))(',
      },
      {
        expected: -3,
        pattern: ')))',
      },
      {
        expected: -3,
        pattern: ')())())',
      },
    ];
    for (const testcase of input) {
      const actual = sut.day1(testcase.pattern);
      expect(actual).toBe(testcase.expected);
    }
  });
});
