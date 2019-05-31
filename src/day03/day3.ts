export function day3a(input: string): number {
  const houses = new Set<string>();
  let current = [0, 0];
  houses.add(JSON.stringify(current));
  for (const house of input) {
    current = move(current, house);
    houses.add(JSON.stringify(current));
  }

  return houses.size;
}

export function day3b(input: string): number {
  const houses = new Set<string>();
  let santa = [0, 0];
  let roboSanta = [0, 0];
  houses.add(JSON.stringify(santa));

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      santa = move(santa, input[i]);
      houses.add(JSON.stringify(santa));
    } else {
      roboSanta = move(roboSanta, input[i]);
      houses.add(JSON.stringify(roboSanta));
    }
  }

  return houses.size;
}

function move(current: number[], house: string) {
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
  return current;
}
