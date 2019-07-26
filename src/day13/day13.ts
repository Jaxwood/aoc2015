const reg = new RegExp(/(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)/)

type Person = [string, Happiness, number];
enum Happiness {
  Gain,
  Lose
}

export function day13(input: string[]) {
  const seatingPreferences = parseInput(input);
  return 0;
}

function parseInput(input: string[]): Map<string, Person[]> {
  const seatingPreferences = new Map<string, Person[]>();
  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [_, source, type, score, target] = match;
      const persons = seatingPreferences.get(source) || [];
      persons.push([
        target,
        type === 'gain' ? Happiness.Gain : Happiness.Lose,
        parseInt(score, 10),
      ]);
      seatingPreferences.set(source, persons);
    }
  }
  return seatingPreferences;
}
