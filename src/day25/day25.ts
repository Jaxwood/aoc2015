function calculate(previous: number): number {
  return (previous * 252533) % 33554393;
}

function* valueAt(row: number, column: number): Iterator<number> {
  let val = 20151125;
  let r = 2;
  let c = 1;
  yield val;
  while (true) {
    val = calculate(val);
    if (r === row && c === column) {
      return val;
    }
    yield val;
    if (r === 1) {
      r = c + 1;
      c = 1;
    } else {
      r--;
      c++;
    }
  }
}

export function day25(row: number, column: number): number {
  const iterator = valueAt(row, column);
  while (true) {
    const result = iterator.next();
    if (result.done) {
      return result.value;
    }
  }
}
