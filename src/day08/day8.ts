export function day8a(input: string[]): number {
  let sum = 0;
  for (const str of input) {
  // tslint:disable-next-line: no-eval
    sum += str.length - (eval(str)).length;
  }
  return sum;
}

export function day8b(input: string[]): number {
  let sum = 0;
  for (const str of input) {
    sum += (JSON.stringify(str)).length - str.length;
  }
  return sum;
}