import crypto from 'crypto';

export function day4(until: number, input: string): number {
  let hex = input;

  let cnt = 0;
  while (true) {
    const md5 = crypto.createHash('MD5');
    md5.update(`${input}${cnt}`);
    hex = md5.digest('hex');
    if (zeroes(until, hex)) {
      return cnt;
    }
    cnt++;
  }
}

function zeroes(until: number, input: string): boolean {
  for (let i = 0; i < until; i++) {
    if (input[i] !== '0') {
      return false;
    }
  }
  return true;
}
