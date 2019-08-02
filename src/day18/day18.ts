type Point = [number, number];

export function day18a(input: string[], steps: number): number {
  let grid: Map<string, number> = new Map<string, number>();
  for (let y = 0; y < input.length; y++) {
    const xs = input[y].split('');
    for (let x = 0; x < xs.length; x++) {
      const state = xs[x] === '#' ? 1 : 0;
      grid.set(`${x},${y}`, state);
    }
  }

  for (let s = 0; s < steps; s++) {
    grid = tick(grid);
  }

  return on(grid);
}

function tick(grid: Map<string, number>): Map<string, number> {
  const result = new Map<string, number>();
  for (const point of grid.keys()) {
    const neighbors = getNeighbors(point, grid);
    const state = grid.get(point) || 0;
    if (state === 1) {
      if (neighbors === 2 || neighbors === 3) {
        result.set(point, 1);
      } else {
        result.set(point, 0);
      }
    } else {
      if (neighbors === 3) {
        result.set(point, 1);
      } else {
        result.set(point, 0);
      }
    }
  }
  return result;
}

function getNeighbors(key: string, grid: Map<string, number>): number {
  const result: number[] = [];
  const [xStr,yStr] = key.split(',');
  const x = parseInt(xStr, 10);
  const y = parseInt(yStr, 10);
  for (let xx = x - 1; xx <= x + 1; xx++) {
    for (let yy = y - 1; yy <= y + 1; yy++) {
      if (xx === x && yy === y) {
        continue;
      }
      result.push(grid.get(`${xx},${yy}`) || 0);
    }
  }
  return result.filter(c => c === 1).length;
}

function on(grid: Map<string, number>): number {
  return [...grid.values()].filter(a => a === 1).length;
}