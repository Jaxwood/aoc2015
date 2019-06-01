// tslint:disable: no-bitwise
export function day7a(instructions: string[], index: string): number {
  const register = new Map<string, number>();
  for (const instruction of instructions) {
    const setRegister = instruction.match(/(\d+) -> (\w+)/);
    if (setRegister) {
      const [expression, value, location] = setRegister;
      register.set(location, toInt(value));
    }
    const bitwiseAnd = instruction.match(/(\w+) AND (\w+) -> (\w+)/);
    if (bitwiseAnd) {
      const [expression, register1, register2, location] = bitwiseAnd;
      const register1Value = register.get(register1) || 0;
      const register2Value = register.get(register2) || 0;
      register.set(location, register1Value & register2Value);
    }
    const bitwiseOr = instruction.match(/(\w+) OR (\w+) -> (\w+)/);
    if (bitwiseOr) {
      const [expression, register1, register2, location] = bitwiseOr;
      const register1Value = register.get(register1) || 0;
      const register2Value = register.get(register2) || 0;
      register.set(location, register1Value | register2Value);
    }
    const leftshift = instruction.match(/(\w+) LSHIFT (\d+) -> (\w+)/);
    if (leftshift) {
      const [expression, register1, count, location] = leftshift;
      const register1Value = register.get(register1) || 0;
      register.set(location, register1Value << toInt(count));
    }
    const rightshift = instruction.match(/(\w+) RSHIFT (\d+) -> (\w+)/);
    if (rightshift) {
      const [expression, register1, count, location] = rightshift;
      const register1Value = register.get(register1) || 0;
      register.set(location, register1Value >> toInt(count));
    }
    const not = instruction.match(/NOT (\w+) -> (\w+)/);
    if (not) {
      const [expression, register1, location] = not;
      const register1Value = register.get(register1) || 0;
      register.set(location, ~register1Value);
    }
  }
  return register.get(index) || 0;
}

function toInt(num: string) {
  return parseInt(num, 10);
}
