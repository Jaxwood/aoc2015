import { day12a } from './day12';

describe('day12', () => {
  it('should calculate sum for [1,2,3]', async () => {
    const actual = day12a([1,2,3]);
    expect(actual).toBe(6);
  });

  it('should calculate sum for {"a":2,"b":4}', async () => {
    const actual = day12a({'a':2,'b':4});
    expect(actual).toBe(6);
  });

  it('should calculate sum for [[[3]]]', async () => {
    expect(day12a([[[3]]])).toBe(3);
  });

  it('should calculate sum for {"a":{"b":4},"c":-1}', async () => {
    expect(day12a({'a':{'b':4},'c':-1})).toBe(3);
  });

  it('should calculate sum for {"a":[-1,1]}', async () => {
    expect(day12a({'a':[-1,1]})).toBe(0);
  });

  it('should calculate sum for [-1,{"a":1}]', async () => {
    expect(day12a([-1,{'a':1}])).toBe(0);
  });

  it('should calculate sum for []', async () => {
    expect(day12a([])).toBe(0);
  });

  it('should calculate sum for {}', async () => {
    expect(day12a({})).toBe(0);
  });
});
