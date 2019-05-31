export function day3a(input: string): number {
  const houses = new Set<string>();
  let current = [0, 0];
  houses.add(JSON.stringify(current));
  for (const house of input) {
    const [x, y] = current;
    if (house === '<') {
      current = [x - 1, y];
    }
    if (house === '>') {
      current = [x + 1, y];
    }
    if (house === 'v') {
      current = [x, y - 1];
    }
    if (house === '^') {
      current = [x, y + 1];
    }
    houses.add(JSON.stringify(current));
  }

  return houses.size;
}
