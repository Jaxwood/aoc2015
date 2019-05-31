import { Sut } from './day1';

interface TestCase {
  expected: number;
  pattern: string;
}
describe('day1', () => {
  it('should do something', () => {
    const sut = new Sut();
    const input: TestCase[] = [
      {
        expected: 0,
        pattern: '(())',
      },
    ];
    for (const testcase of input) {
      const actual = sut.day1(testcase.pattern);
      expect(actual).toBe(testcase.expected);
    }
  });
});
