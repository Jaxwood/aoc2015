const reg = new RegExp(/(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds/);
import * as _ from 'lodash';

export function day14a(input: string[], ticks: number): number {
  const contestants = parseInput(input);

  for (let i = 0; i < ticks; i++) {
    for (const contestant of contestants) {
      contestant.tick();
    }
  }

  const best = _.maxBy(contestants, c => c.getDistanceTraveled());
  return best ? best.getDistanceTraveled() : 0;
}

export function day14b(input: string[], ticks: number): number {
  const contestants = parseInput(input);

  for (let i = 0; i < ticks; i++) {
    for (const contestant of contestants) {
      contestant.tick();
    }
    const maxDistance = _.maxBy(contestants, c => c.getDistanceTraveled());
    if (maxDistance) {
      const inLead = contestants.filter(
        c => c.getDistanceTraveled() === maxDistance.getDistanceTraveled()
      );
      for (const lead of inLead) {
        lead.point++;
      }
    }
  }

  const best = _.maxBy(contestants, c => c.point);
  return best ? best.point : 0;
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
  private iterator: IterableIterator<number>;
  private treshold: number;
  private isResting: boolean = false;
  private points = 0;

  constructor(name: string, speed: number, time: number, rest: number) {
    this.name = name;
    this.speed = speed;
    this.time = time;
    this.rest = rest;
    this.iterator = this.state();
    this.treshold = this.iterator.next().value;
  }

  public tick(): void {
    ++this.clock;
    while(this.clock > this.treshold)
    {
      this.treshold = this.iterator.next().value;
      this.isResting = !this.isResting;
    }
    this.distance += this.isResting ? 0 : this.speed;
  }

  public getDistanceTraveled(): number {
    return this.distance;
  }

  public set point(value: number) {
    this.points = value;
  }

  public get point(): number {
    return this.points;
  }

  public *state(): IterableIterator<number> {
    let initial = this.time;
    yield initial;
    while (true) {
      initial += this.rest;
      yield initial;
      initial += this.time;
      yield initial;
    }
  }
}