import fsReadfilePromise from 'fs-readfile-promise';
import path from 'path';
import { day15a, day15b } from './day15';

describe('day15', () => {
  describe('a', () => {
    it('should find best reciepe for 100 teaspoons', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      const actual = day15a(input.split('\r\n'));
      expect(actual).toBe(62842880);
    });
    it('should find best reciepe for 100 teaspoons with puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day15a(input.split('\r\n'));
      expect(actual).toBe(13882464);
    });
  });

  describe('b', () => {
    it('should find best reciepe with calorie count of 500', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'a.txt'),
        'utf-8'
      );
      const actual = day15b(input.split('\r\n'));
      expect(actual).toBe(57600000);
    });

    it('should find best reciepe with calorie count of 500 with puzzle input', async () => {
      const input = await fsReadfilePromise(
        path.resolve(__dirname, 'input.txt'),
        'utf-8'
      );
      const actual = day15b(input.split('\r\n'));
      expect(actual).toBe(11171160);
    });
  });
});