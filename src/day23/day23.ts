// tslint:disable: interface-name
interface Instruction {
  name: string;
  reg: string,
  val: number
}

const jumpReg = /^(\w+) ([-|+]*\d+)$/;
const jumpRelativeReg = /^(\w+) (\w+), ([-|+]*\d+)$/;
const tripleIncReg = /^(\w+) (\w+)$/;

function parse(input: string[]): Instruction[] {
  const instructions: Instruction[] = [];
  for (const line of input) {
    const jump = line.match(jumpReg);
    const inc = line.match(tripleIncReg);
    const relative = line.match(jumpRelativeReg);
    if (jump) {
      const [, name, val] = jump;
      instructions.push({ name, reg: '', val: parseInt(val, 10) });
    }
    if (inc) {
      const [, name, reg] = inc;
      instructions.push({ name, reg, val: 0 });
    }
    if (relative) {
      const [, name, reg, val] = relative;
      instructions.push({ name, reg, val: parseInt(val, 10) });
    }
  }
  return instructions;
}

export function day23(raw: string[], a: number): number {
  const instructions = parse(raw);
  const registry = new Map<string, number>();
  registry.set('a', a);
  registry.set('b', 0);
  let idx = 0;
  while (idx < instructions.length) {
    const instruction = instructions[idx];
    switch(instruction.name) {
      case 'hlf':
        const hlf = registry.get(instruction.reg);
        if (hlf !== undefined) {
          registry.set(instruction.reg, Math.round(hlf / 2));
        }
        idx++;
        break;
      case 'tpl':
        const tpl = registry.get(instruction.reg);
        if (tpl !== undefined) {
          registry.set(instruction.reg, tpl * 3);
        }
        idx++;
        break;
      case 'inc':
        const inc = registry.get(instruction.reg);
        if (inc !== undefined) {
          registry.set(instruction.reg, inc + 1);
        }
        idx++;
        break;
      case 'jmp':
        idx = idx + instruction.val;
        break;
      case 'jie':
        const jie = registry.get(instruction.reg);
        if (jie !== undefined && jie % 2 === 0) {
          idx = idx + instruction.val;
        } else {
          idx++;
        }
        break;
      case 'jio':
        const jio = registry.get(instruction.reg);
        if (jio !== undefined && jio === 1) {
          idx = idx + instruction.val;
        } else {
          idx++;
        }
        break;
      default:
         throw new Error(`unsupported instruction: ${instruction.name}`)
    }
  }
  return registry.get('b') || 0;
};