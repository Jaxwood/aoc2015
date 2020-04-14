import * as _ from 'lodash';

type Package = [number, number, number, number[]];

function quantumEntanglement(compartment: number[]): number {
  return compartment.reduce((acc, n) => (acc *= n), 1);
}

function sumOfSubsets(packages: number[], target: number): Set<number[]> {
  const max = packages.reduce((acc, n) => (acc += n), 0);
  const queue: Package[] = [[0, max, 0, []]];
  const results: Set<number[]> = new Set<number[]>();
  while (queue.length > 0) {
    const next = queue.pop();
    if (!next) {
      throw new Error('could not read from queue');
    }
    const [num, total, idx, acc] = next;

    if (num === target) {
      results.add([acc.length, quantumEntanglement(acc)]);
    }

    if (idx >= packages.length) {
      continue;
    }

    if (num + packages[idx] > target) {
      continue;
    }

    if (packages.slice(idx + 1).reduce((a, n) => (a += n), 0) + num >= target) {
      queue.push([num, total - packages[idx], idx + 1, acc]);
    }

    if (
      num + packages[idx] !== target &&
      num + packages[idx] + packages[idx] > target
    ) {
      continue;
    }

    if (num + packages[idx] <= target) {
      queue.push([
        num + packages[idx],
        total - packages[idx],
        idx + 1,
        acc.concat(packages[idx]),
      ]);
    }
  }
  return results;
}

export function day24(raw: string[], compartments: number): number {
  const packages = raw.map((p) => parseInt(p, 10));
  const compartmentSize =
    packages.reduce((acc, n) => (acc += n), 0) / compartments;
  const subsets = Array.from(sumOfSubsets(packages, compartmentSize));
  const [minCompartmentSize] = _.minBy(subsets, ([a, b]) => a) || [0, 0];
  return (
    _.min(
      subsets.filter(([a, b]) => a === minCompartmentSize).map(([a, b]) => b)
    ) || 0
  );
}
