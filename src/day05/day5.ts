const vowels = 'aeiou';
const disallowed = ['ab', 'cd', 'pq', 'xy'];

export function day5a(input: string[]): number {
  let result = 0;
  for (const candidate of input) {
    if (
      hasVowel(candidate) &&
      hasDoubleLetter(candidate) &&
      !hasDisallowed(candidate)
    ) {
      result += 1;
    }
  }
  return result;
}

function hasDisallowed(input: string): boolean {
  for (const disallow of disallowed) {
    if (input.indexOf(disallow) !== -1) {
      return true;
    }
  }
  return false;
}

function hasDoubleLetter(input: string): boolean {
  for (let i = 0; i < input.length; i++) {
    if (i === input.length - 1) {
      return false;
    }
    if (input[i] === input[i + 1]) {
      return true;
    }
  }
  return false;
}

function hasVowel(input: string): boolean {
  let vowelCnt = 0;
  for (const candidate of input) {
    if (vowels.indexOf(candidate) !== -1) {
      vowelCnt += 1;
    }
  }
  return vowelCnt >= 3;
}
