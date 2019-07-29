import * as _ from 'lodash';
const reg = new RegExp(
  /(\w+): \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+)/
);

export function day15a(input: string[]): number {
  let max = 0;
  const ingridients = parseInput(input);
  const combinations = combine(100, input.length);
  for (const combi of combinations) {
    const combis = permute(combi);
    for (const c of combis) {
      const res = mix(ingridients, c);
      if (res > max) {
        max = res;
      }
    }
  }
  return max;
}

export function mix(ingridients: Ingridient[], teaspoons: number[]): number {
  let capacity = 0;
  let durability = 0;
  let flavor = 0;
  let texture = 0;
  for (let i = 0; i < ingridients.length; i++) {
    capacity += ingridients[i].capacity * teaspoons[i];
    durability += ingridients[i].durability * teaspoons[i];
    flavor += ingridients[i].flavor * teaspoons[i];
    texture += ingridients[i].texture * teaspoons[i];
  }
  return lessThanZeroGuard(capacity) * lessThanZeroGuard(durability) * lessThanZeroGuard(flavor) * lessThanZeroGuard(texture);
}

// taken from https://stackoverflow.com/a/37580979/99928
function permute(permutation: number[]): number[][] {
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

function combine(target: number, values: number): number[][] {
  let result: number[][] = [];
  if (values === 2) {
    for (let i = 0; i <= target; i++) {
      result.push([i, target - i]);
    }
  } else {
    for (let i = 0; i <= target; i++) {
      const res = combine(target - i, values - 1);
      for (const r of res) {
        r.push(i);
      }
      result = result.concat(res);
    }
  }
  return result;
}

function lessThanZeroGuard(target: number): number {
  return target < 0 ? 0 : target;
}

class Ingridient {
  public name: string;
  public capacity: number;
  public durability: number;
  public flavor: number;
  public texture: number;
  public calories: number;

  constructor(
    name: string,
    capacity: number,
    durability: number,
    flavor: number,
    texture: number,
    calories: number
  ) {
    this.calories = calories;
    this.durability = durability;
    this.capacity = capacity;
    this.flavor = flavor;
    this.texture = texture;
    this.name = name;
  }
}

function parseInput(input: string[]): Ingridient[] {
  const ingridients: Ingridient[] = [];
  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [_, name, capacity, durability, flavor, texture, calories] = match;
      ingridients.push(
        new Ingridient(
          name,
          parseInt(capacity, 10),
          parseInt(durability, 10),
          parseInt(flavor, 10),
          parseInt(texture, 10),
          parseInt(calories, 10)
        )
      );
    }
  }
  return ingridients;
}
