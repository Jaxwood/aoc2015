export class Sut {
  day1(input: string): number {
    let cnt = 0;
    for (const s of input) {
      if (s === '(') {
        cnt = cnt + 1;
      } else {
        cnt = cnt - 1;
      }
    }
    return cnt;
  }
}
