import { checkPasswordRequirements, day11 } from './day11';

describe.each([['abcdefgh', 'abcdffaa'], ['ghijklmn', 'ghjaabcc']])('day11', (password, expected) => {
  xit(`should generate password ${expected} from ${password}`, () => {
    const actual = day11(password);
    expect(actual).toBe(expected);
  });
});

describe('utility', () => {
  it('should return false if i is found', () => {
    expect(checkPasswordRequirements('i')).toBeFalsy();
  });

  it('should return false if o is found', () => {
    expect(checkPasswordRequirements('o')).toBeFalsy();
  });

  it('should return false if l is found', () => {
    expect(checkPasswordRequirements('l')).toBeFalsy();
  });

  it('should return true if i, o, l is not found', () => {
    expect(checkPasswordRequirements('abcaabb')).toBeTruthy();
  });

  it('should return true for 2 non-overlapping pairs ', () => {
    expect(checkPasswordRequirements('abcaabb')).toBeTruthy();
  });
  it('should return false only 1 pairs ', () => {
    expect(checkPasswordRequirements('abcaaaa')).toBeFalsy();
  });
  it('should return false for 2 overlapping pairs ', () => {
    expect(checkPasswordRequirements('abcd')).toBeFalsy();
  });
  it('should return true if straight chars ', () => {
    expect(checkPasswordRequirements('abcddee')).toBeTruthy();
  });
  it('should return false if no straight chars ', () => {
    expect(checkPasswordRequirements('abddee')).toBeFalsy();
  });
})