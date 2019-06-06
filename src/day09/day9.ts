const regex = new RegExp(/(\w+) to (\w+) = (\d+)/);

interface ITravel {
  cost: number,
  from: string,
  to: string,
}

export function day9a(input: string[]) {
  const nodes: ITravel[] = [];
  for (const line of input) {
    if (regex.test(line)) {
      const match = line.match(regex);
      if (match) {
      const [exp, from, to, cost] = match;
        nodes.push({from, to, cost: parseInt(cost, 10) });
      }
    }
  }

  return 0;
}