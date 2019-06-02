// tslint:disable no-bitwise
import _ from 'lodash';
import { And } from './And';
import { Lshift } from './Lshift';
import { Not } from './Not';
import { Or } from './Or';
import Result from './Result';
import { Rshift } from './Rshift';
import { Set } from './Set';

const setOperation = new RegExp(/^(\w+|\d+) -> (\w+)$/);
const andOperation = new RegExp(/^(\w+|\d+) AND (\w+|\d+) -> (\w+)$/);
const orOperation = new RegExp(/^(\w+|\d+) OR (\w+|\d+) -> (\w+)$/);
const leftshiftOperation = new RegExp(/^(\w+|\d+) LSHIFT (\d+) -> (\w+)$/);
const rightshiftOperation = new RegExp(/^(\w+|\d+) RSHIFT (\d+) -> (\w+)$/);
const notOperation = new RegExp(/^NOT (\w+|\d+) -> (\w+)$/);

export interface IOperation {
  execute(register: Map<string, number>): Result;
}

export function day7a(instructions: string[]): Map<string, number> {
  const register = new Map<string, number>();
  const operations = parseOperations(instructions);
  while (operations.length > 0) {
    const operation = operations.shift();
    if (!operation) {
      continue;
    }
    const result = operation.execute(register);
    if (result.success) {
      register.set(result.key, result.value);
    } else {
      operations.push(operation);
    }
  }
  return register;
}

function parseOperations(instructions: string[]): IOperation[] {
  const operations: IOperation[] = [];
  for (const instruction of instructions) {
    if (setOperation.test(instruction)) {
      const setRegister = instruction.match(setOperation);
      if (setRegister) {
        const [expression, value, location] = setRegister;
        operations.push(new Set(value, location));
      }
    }
    if (andOperation.test(instruction)) {
      const bitwiseAnd = instruction.match(andOperation);
      if (bitwiseAnd) {
        const [expression, register1, register2, location] = bitwiseAnd;
        operations.push(new And(register1, register2, location));
      }
    }
    if (orOperation.test(instruction)) {
      const bitwiseOr = instruction.match(orOperation);
      if (bitwiseOr) {
        const [expression, register1, register2, location] = bitwiseOr;
        operations.push(new Or(register1, register2, location));
      }
    }
    if (leftshiftOperation.test(instruction)) {
      const ls = instruction.match(leftshiftOperation);
      if (ls) {
        const [expression, register1, count, location] = ls;
        operations.push(new Lshift(register1, count, location));
      }
    }
    if (rightshiftOperation.test(instruction)) {
      const rs = instruction.match(rightshiftOperation);
      if (rs) {
        const [expression, register1, count, location] = rs;
        operations.push(new Rshift(register1, count, location));
      }
    }
    if (notOperation.test(instruction)) {
      const not = instruction.match(notOperation);
      if (not) {
        const [expression, register1, location] = not;
        operations.push(new Not(register1, location));
      }
    }
  }
  return operations;
}
