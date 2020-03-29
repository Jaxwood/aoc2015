import * as _ from 'lodash';
const reg = new RegExp(/(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)/)

type Person = [string, number];

export function day13a(input: string[]) {
  const seatingPreferences = parseInput(input);
  const seatingOptions = permute([...seatingPreferences.keys()]);
  const costs = seatingOptions.map(c => calculate(c, seatingPreferences));
  return _.max(costs);
}

export function day13b(input: string[]) {
  const myself = 'neutral';
  const seatingPreferences = parseInput(input);
  // add neutral element
  for (const key of seatingPreferences.keys()) {
    const person = seatingPreferences.get(key) || [];
    person.push([myself, 0]);
    seatingPreferences.set(key, person);
  }
  seatingPreferences.set(myself, [...seatingPreferences.keys()].map(c => [c,0]));

  const seatingOptions = permute([...seatingPreferences.keys()]);
  const costs = seatingOptions.map(c => calculate(c, seatingPreferences));
  return _.max(costs);
}

function calculate(seatings: string[], seatingPreference: Map<string, Person[]>): number {
  let sum = 0;
  for (let i = 0; i < seatings.length; i++) {
    const key = seatings[i];
    const preferences = seatingPreference.get(key) || [];
    const left = i === 0 ? seatings.length - 1 : i - 1;
    const right = i === seatings.length - 1 ? 0 : i + 1;
    const leftperson = getScore(preferences, seatings[left]);
    const rightperson = getScore(preferences, seatings[right]);
    sum += leftperson + rightperson;
  }

  return sum;
}

function getScore(preferences: Person[], key: string): number {
  for (const person of preferences) {
    const [name,  score] = person;
    if (key === name) {
      return score;
    }
  }
  return 0;
}

function parseInput(input: string[]): Map<string, Person[]> {
  const seatingPreferences = new Map<string, Person[]>();
  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [, source, type, score, target] = match;
      const persons = seatingPreferences.get(source) || [];
      const modifier = type === 'gain' ? 1 : -1;
      persons.push([
        target,
        modifier * parseInt(score, 10),
      ]);
      seatingPreferences.set(source, persons);
    }
  }
  return seatingPreferences;
}

// taken from https://stackoverflow.com/a/37580979/99928
function permute(permutation: string[]): string[][] {
  const length = permutation.length;
  const result = [permutation.slice()];
  const c = new Array(length).fill(0);
  let idx = 1;

  while (idx < length) {
    if (c[idx] < idx) {
      const k = idx % 2 && c[idx];
      const p = permutation[idx];
      permutation[idx] = permutation[k];
      permutation[k] = p;
      ++c[idx];
      idx = 1;
      result.push(permutation.slice());
    } else {
      c[idx] = 0;
      ++idx;
    }
  }
  return result;
}
