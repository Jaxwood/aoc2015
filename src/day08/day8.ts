export function day8a(input: string[]): number {
  let sum = 0;
  for (const str of input) {
    sum += str.length - (eval(str)).length;
  }
  return sum;
}

function characterCodes(input: string) {
  let cnt = 2;
  for (const c of input) {
    cnt++;
  }
  return cnt;
}

