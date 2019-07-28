import * as _ from 'lodash';
import { stringLiteral } from '@babel/types';
const reg = new RegExp(
  /(\w+): \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+), \w+ (-?\d+)/
);

export function day15a(input: string[]): number {
  const ingridients = parseInput(input);
  return 0;
}

export function mix(ingridients: Ingridient[], teaspoons: number[]): number {
  const mixed = _.zip(ingridients, teaspoons);
  const result = new Map<string, number[]>()
  for (const [ingridient, teaspoon] of mixed) {
    if (ingridient && teaspoon) {
      const prop = result.get('capacity') || [];
      result.set('capacity', prop); 
    }
  }
  return 0;
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
