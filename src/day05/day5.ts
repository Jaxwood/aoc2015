import * as _ from 'lodash';
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

export function day5b(input: string[]): number {
  let result = 0;
  for (const candidate of input) {
    if (hasPair(candidate) && hasRepeatingLetter(candidate)) {
      result += 1;
    }
  }
  return result;
}

function hasPair(candidate: string): boolean {
  const pairs = new Set<string>();
  const prevPair = new Map<string, number>();
  for (let i = 0; i < candidate.length - 1; i++) {
    const key = JSON.stringify([candidate[i], candidate[i + 1]]);
    if (pairs.has(key)) {
      const prevIndex = prevPair.get(key) || 0;
      if (i !== prevIndex + 1) {
        return true;
      }
    } else {
      prevPair.set(key, i);
      pairs.add(key);
    }
  }
  return false;
}

function hasRepeatingLetter(candidate: string): boolean {
  for (let i = 1; i < candidate.length - 1; i++) {
    if (candidate[i - 1] === candidate[i + 1]) {
      return true;
    }
  }
  return false;
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
