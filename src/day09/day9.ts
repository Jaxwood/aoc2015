const regex = new RegExp(/(\w+) to (\w+) = (\d+)/);

type Destination = [string, number];

export function day9a(input: string[]) {
  const nodes = new Map<string, Set<Destination>>();
  for (const line of input) {
    const match = line.match(regex);
    if (match) {
      const [exp, from, to, cost] = match;

      const destinations = nodes.get(from) || new Set<Destination>();
      destinations.add([to, parseInt(cost, 10)]);
      nodes.set(from, destinations);

      const reverse = nodes.get(to) || new Set<Destination>();
      reverse.add([from, parseInt(cost, 10)]);
      nodes.set(to, reverse);
    }
  }

  global.console.log(nodes);

  return 0; // shorestDistances;
}
