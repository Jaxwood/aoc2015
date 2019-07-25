import { checkPasswordRequirements, day11, generateNewPassword } from './day11';

describe.each([
  ['abcdefgh', 'abcdffaa'],
  ['ghijklmn', 'ghjaabcc'],
  ['hepxcrrq', 'hepxxyzz'],
  ['hepxxyzz', 'heqaabcc'],
])('day11', (password, expected) => {
  it(`should generate password ${expected} from ${password}`, () => {
    const actual = day11(password);
    expect(actual).toBe(expected);
  });
});

describe.each([
  ['xx', 'xy'],
  ['xy', 'xz'],
  ['xz', 'ya'],
  ['ya', 'yb'],
  ['xzz', 'yaa'],
])('generate next password', (input: string, expected: string) => {
  test(`should increment password ${input} to ${expected}`, () => {
    expect(generateNewPassword(input)).toBe(expected);
  });
});

describe('check password requirements', () => {
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
});
