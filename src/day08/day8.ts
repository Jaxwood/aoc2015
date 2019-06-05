export function day8a(input: string[]): number {
  let sum = 0;
  for (const str of input) {
    sum += characterCodes(str) - str.length;
  }
  return sum;
}

function characterCodes(input: string) {
  let cnt = 2;
  for (const c of input) {
    const ascii = c.charCodeAt(0);
    if (ascii >= 96 && ascii <= 122) {
      cnt++;
    }
    else {
      if (ascii === 34 || ascii === 10) {
        cnt += 2;
      }
      else {
        cnt += 4;
      }
    }
  }
  return cnt;
}

