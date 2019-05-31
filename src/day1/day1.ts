export function day1a(input: string): number {
  return sumFloors(input);
}

export function day1b(input: string): number {
  return sumFloors(input, iteration => iteration === -1);
}

function sumFloors(
  input: string,
  predicate?: (iteration: number) => boolean
): number {
  let result = 0;
  let iterations = 1;
  for (const i of input) {
    if (i === '(') {
      result += 1;
    } else {
      result -= 1;
    }
    if (predicate && predicate(result)) {
      return iterations;
    }
    iterations += 1;
  }
  return result;
}
