import * as _ from 'lodash';
const regex = new RegExp(/(\w+) to (\w+) = (\d+)/);

type Destination = [string, number];

export function day9a(input: string[]): number {
  const graph = parseInput(input);

  let lowestCost = Infinity;
  for(const from of graph.keys()) {
    const cost = calculateCost(from, graph, (a,b) => a < b);
    if (cost < lowestCost) {
      lowestCost = cost;
    }
  }

  return lowestCost;
}

function parseInput(input: string[]) {
  const graph = new Map<string, Set<Destination>>();
  for (const line of input) {
    const match = line.match(regex);
    if (match) {
      const [exp, from, to, cost] = match;
      const destinations = graph.get(from) || new Set<Destination>();
      destinations.add([to, parseInt(cost, 10)]);
      graph.set(from, destinations);
      const reverse = graph.get(to) || new Set<Destination>();
      reverse.add([from, parseInt(cost, 10)]);
      graph.set(to, reverse);
    }
  }
  return graph;
}

function calculateCost(from: string, graph: Map<string, Set<Destination>>, predicate: (a: number, b: number) => boolean): number {
  const visited = [];
  const queue = [from];
  let sum = 0;
  while (queue.length > 0) {
    const city = queue.pop();
    if (city) {
      visited.push(city);
      const neighbors = graph.get(city);
      if (neighbors) {
        let min = Infinity;
        let next: string = '';
        for (const [destination, cost] of neighbors) {
          if (visited.indexOf(destination) === -1) {
            if (predicate(cost, min)) {
              min = cost;
              next = destination;
            }
          }
        }
        if (min !== Infinity){
          sum += min;
          queue.push(next);
        }
      }
    }
  }

  return sum;
}
