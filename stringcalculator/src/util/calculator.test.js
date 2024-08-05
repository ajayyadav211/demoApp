import {addString} from './calculator'

test('return the number contains in string', () => {
    expect(addString("1")).toBe(1);
  });

test('return 0 for an empty string', () => {
    expect(addString("")).toBe(0);
  });

  test('return the sum of two comma-separated numbers', () => {
    expect(addString("1,5")).toBe(6);
  });