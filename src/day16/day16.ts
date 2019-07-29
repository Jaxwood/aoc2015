const reg = new RegExp(/\w (\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)/);

export function day16a(input: string[]): number {
  for (const line of input) {
    const match = line.match(reg);
    if (match) {
      const [_, aunt, fst, fstnum, snd, sndnum, third, thirdnum] = match;
      global.console.log(aunt, fst, fstnum, snd, sndnum, third, thirdnum);
    }
  }
  return 0;
}