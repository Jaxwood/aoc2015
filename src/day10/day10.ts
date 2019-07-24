export function day10(input: number, repeat: number): string {
  let result = input.toString();
  for(let i = 0; i < repeat; i++) {
    result = lookandsay(result);
  }
  return result;
}

function lookandsay(input: string): string {
  let result: string = '';
  let charCount = 0;
  let charToCount = null;
  for (const c of input) {
    // first iteration
    if (charToCount === null) {
      charToCount = c;
    }
    // if char matches previous - increment char count
    if (charToCount === c) {
      charCount += 1;
    }
    // if char doesn't match previous - update result and set new char and char count
    if (charToCount !== c) {
      result = update(result, charCount, charToCount);
      charToCount = c;
      charCount = 1;
    }
  }
  // add result for the last iteration
  return update(result, charCount, charToCount || '');
}

function update(result: string, charCount: number, charToCount: string): string {
  result += charCount;
  result += charToCount;
  return result;
}

