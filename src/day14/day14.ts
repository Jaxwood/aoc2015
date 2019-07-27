const reg = new RegExp(/(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds/);
import * as _ from 'lodash';

export function day14(input: string[], ticks: number): number {
  const contestants = parseInput(input);

  for (let i = 0; i < ticks; i++) {
    for (const contestant of contestants) {
      contestant.tick();
    }
  }

  global.console.log(contestants);
  const best = _.maxBy(contestants, c => c.getDistanceTraveled());
  return best ? best.getDistanceTraveled() : 0;
}

function parseInput(input: string[]): Reindeer[] {
  const result: Reindeer[] = [];

  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [_, source, speed, time, rest] = match;
      result.push(new Reindeer(source, parseInt(speed, 10), parseInt(time, 10), parseInt(rest, 10)));
    }
  }
  return result;
}

class Reindeer {
  private name: string;
  private speed: number;
  private time: number;
  private rest: number;
  private clock = 0;
  private distance = 0;

  constructor(name: string, speed: number, time: number, rest: number) {
    this.name = name;
    this.speed = speed;
    this.time = time;
    this.rest = rest;
  }

  public tick(): void {
    ++this.clock;
    this.distance += this.speed;
  }

  public getDistanceTraveled(): number {
    return this.distance;
  }
}