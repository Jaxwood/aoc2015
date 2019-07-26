import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day12 } from './day12';

describe('day12', () => {
  describe('a', () => {
    it('should calculate sum for [1,2,3]', async () => {
      const actual = day12([1, 2, 3]);
      expect(actual).toBe(6);
    });

    it('should calculate sum for {"a":2,"b":4}', async () => {
      const actual = day12({ a: 2, b: 4 });
      expect(actual).toBe(6);
    });

    it('should calculate sum for [[[3]]]', async () => {
      expect(day12([[[3]]])).toBe(3);
    });

    it('should calculate sum for {"a":{"b":4},"c":-1}', async () => {
      expect(day12({ a: { b: 4 }, c: -1 })).toBe(3);
    });

    it('should calculate sum for {"a":[-1,1]}', async () => {
      expect(day12({ a: [-1, 1] })).toBe(0);
    });

    it('should calculate sum for [-1,{"a":1}]', async () => {
      expect(day12([-1, { a: 1 }])).toBe(0);
    });

    it('should calculate sum for []', async () => {
      expect(day12([])).toBe(0);
    });

    it('should calculate sum for {}', async () => {
      expect(day12({})).toBe(0);
    });

    it('should calculate sum for day12', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.json'),
        'utf-8'
      );
      const actual = day12(JSON.parse(input));
      expect(actual).toBe(191164);
    });
  });

  describe('b', () => {
    it('should calculate sum for [1,2,3]', () => {
      expect(day12([1,2,3], true)).toBe(6);
    });

    it('should calculate sum for [1,{"c":"red","b":2},3]', () => {
      expect(day12([1,{'c':'red','b':2},3], true)).toBe(4);
    });

    it('should calculate sum for {"d":"red","e":[1,2,3,4],"f":5}', () => {
      expect(day12({'d':'red','e':[1,2,3,4],'f':5}, true)).toBe(0);
    });

    it('should calculate sum for [1,"red",5] ', () => {
      expect(day12([1,'red',5] , true)).toBe(6);
    });

    it('should calculate sum for day12', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.json'),
        'utf-8'
      );
      const actual = day12(JSON.parse(input), true);
      expect(actual).toBe(87842);
    });
  })
});