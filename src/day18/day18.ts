export function day18a(input: string[], steps: number): number {
  let grid: Map<string, number> = createGrid(input);
  const exceptions = new Map<string, boolean>();

  for (let s = 0; s < steps; s++) {
    grid = tick(grid, exceptions);
  }

  return on(grid);
}

export function day18b(input: string[], steps: number): number {
  let grid: Map<string, number> = createGrid(input);
  const exceptions = new Map<string, boolean>();

  const corners = [0, input.length - 1];
  for (const top of corners) {
    for (const bottom of corners) {
      const key = `${top},${bottom}`;
      exceptions.set(key, true);
      grid.set(key, 1);
    }
  }

  for (let s = 0; s < steps; s++) {
    grid = tick(grid, exceptions);
  }

  return on(grid);
}

function createGrid(input: string[]) {
  const grid: Map<string, number> = new Map<string, number>();
  for (let y = 0; y < input.length; y++) {
    const xs = input[y].split('');
    for (let x = 0; x < xs.length; x++) {
      const state = xs[x] === '#' ? 1 : 0;
      grid.set(`${x},${y}`, state);
    }
  }
  return grid;
}

function tick(grid: Map<string, number>, exceptions: Map<string, boolean>): Map<string, number> {
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

    if (exceptions.get(point) || false) {
      result.set(point, 1);
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