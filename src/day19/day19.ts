import * as _ from 'lodash';

type Replacement = [string, string];
type Mutation = [string, number];

const reg = new RegExp(/(\w+) => (\w+)/);

export function day19a(input: string[], molecule: string): number {
  const replacements: Replacement[] = parse(input);
  const result = replace(replacements, molecule);
  return _.uniq(result).length;
}

export function day19b(input: string[], molecule: string): number {
  const replacements: Replacement[] = parse(input).map(([a, b]) => [b, a]);
  const queue: Mutation[] = [[molecule, 0]];

  while(queue.length > 0) {
    const [candidate, mutation] = queue.pop() || ['', 0];
    const result = replace(replacements, candidate);
    for (const res of result) {
      if (res === 'e') {
        return mutation + 1;
      }
      queue.push([res, mutation + 1]);
    }
  }

  return 0;
}

function replace(replacements: Replacement[], molecule: string): string[] {
  const result: string[] = [];
  for (let i = 0; i < molecule.length; i++) {
    const letter = molecule[i];
    const candidates = replacements.filter(([from, to]) => from.startsWith(letter));
    for (const [from, to] of candidates) {
      if (i + from.length > molecule.length) {
        continue;
      }
      let match = true;
      for (let j = 0; j < from.length; j++) {
        if (molecule[i+j] !== from[j]) {
          match = false;
        }
      }
      if (match) {
        const left = molecule.substr(0, i);
        const right = molecule.substr(i + from.length);
        result.push(left.concat(to).concat(right));
      }
    }
  }
  return result;
}

function parse(input: string[]): Replacement[] {
  const replacements: Replacement[] = [];
  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [, from, to] = match;
      replacements.push([from, to]);
    }
  }
  return replacements;
}
