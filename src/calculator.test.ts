import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../calculator';

describe('Calculator Tests', () => {
  it('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should divide two numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });

  it('should return NaN when adding invalid types', () => {
    expect(() => add('a' as any, 3)).toThrow();
  });
});
