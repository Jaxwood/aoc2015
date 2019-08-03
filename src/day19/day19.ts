import * as _ from 'lodash';
type Replacement = [string, string];

const reg = new RegExp(/(\w+) => (\w+)/);
export function day19a(input: string[], molecule: string): number {
  const replacements: Replacement[] = parse(input);
  let result: string[] = [];
  for (const replacement of replacements) {
    result = replace(result, 0, molecule, replacement);
  }
  return _.uniq(result).length;
}

export function day19b(input: string[], molecule: string): number {
  // always start with a single elektron 'e'
  return 0;
}

function replace(result: string[], index: number, molecule: string, [from, to]: Replacement, ): string[] {
  if (index > molecule.length) {
    return result;
  }
  if (molecule.indexOf(from, index) === index) {
    const left = molecule.substr(0, index);
    const right = molecule.substr(index + from.length);
    result.push(left.concat(to).concat(right));
  }
  return replace(result, ++index, molecule, [from, to]);
}

function parse(input: string[]): Replacement[] {
  const replacements: Replacement[] = [];
  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [_, from, to] = match;
      replacements.push([from, to]);
    }
  }
  return replacements;
}
