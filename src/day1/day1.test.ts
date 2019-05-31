import { Sut } from './day1';

describe('day1', () => {
  it('should do something', () => {
    const sut = new Sut();
    const actual = sut.day1('(())');
    expect(actual).toBe(0);
  });
});
