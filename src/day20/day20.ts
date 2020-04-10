export function day20a(target: number): number {
  for (let house: number = 500000; ; house++) {
    const presents = factors(house).reduce((acc, num) => (acc += 10 * num), 0);
    if (presents >= target) {
      return house;
    }
  }
}

export function day20b(target: number): number {
  for (let house: number = 500000; ; house++) {
    const presents = factors(house)
      .filter((num) => num * 50 >= house)
      .reduce((acc, num) => (acc += 11 * num), 0);
    if (presents >= target) {
      return house;
    }
  }
}

function factors(num: number): number[] {
  const result = [];
  for (let i = 1; ; i++) {
    if (num % i === 0) {
      if (result.indexOf(i) !== -1) {
        return result;
      }
      result.push(i);
      result.push(num / i);
    }
  }
}
