const reg = new RegExp(/\w (\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)/);

type Property = [string, number];

export function day16a(input: string[]): number {
  const aunts = parse(input);
  const characteristics = auntCharacteristics();
  const candidate = aunts.filter(c => c.matches(characteristics));

  if (candidate.length === 1) {
    return candidate[0].name;
  }
  return 0;
}

function auntCharacteristics(): Property[] {
  return [
    ['children', 3],
    ['cats', 7],
    ['samoyeds', 2],
    ['pomeranians', 3],
    ['akitas', 0],
    ['vizslas', 0],
    ['goldfish', 5],
    ['trees', 3],
    ['cars', 2],
    ['perfumes', 1],
  ];
}

function parse(input: string[]): Aunt[] {
  const aunts = [];
  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [_, aunt, fst, fstnum, snd, sndnum, third, thirdnum] = match;
      aunts.push(Aunt.create(parseInt(aunt, 10), [[fst, parseInt(fstnum, 10)], [snd, parseInt(sndnum, 10)], [third, parseInt(thirdnum, 10)]]));
    }
  }
  return aunts;
}

class Aunt {

  public static create(name: number, properties: Property[]): Aunt {
    return new Aunt(name, properties);
  }

  public name: number;
  private properties: Property[];

  constructor(name: number, properties: Property[]) {
    this.name = name;
    this.properties = properties;
  }

  public matches(characteristics: Property[]): boolean {
    for (const [charac, characVal] of characteristics) {
      const prop = this.properties.filter(([c, _]) => c === charac);
      if (prop.length === 1) {
        const [_,val] = prop[0];
        if (characVal !== val) {
          return false;
        }
      }
    }
    return true;
  }
}
