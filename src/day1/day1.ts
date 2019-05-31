export function day1(input: string): number {
  let result = 0;
  for (const i of input) {
    if (i === '(') {
      result += 1;
    } else {
      result -= 1;
    }
  }
  return result;
}
