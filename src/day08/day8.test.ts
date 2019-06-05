// tslint:disable: quotemark
import { day8a } from './day8';

describe('day8', () => {
  it('should calculate characters', () => {
    const input = [
      "",
      "abc",
      "aaa\"aaa",
      "\x27",
    ];
    expect(day8a(input)).toBe(12);
  });
});
