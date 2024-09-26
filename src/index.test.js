import {capitalize, reversed, calculator, caesarshift, analyzeArray} from "./index.js";

test('Functions exists', () => {
  expect(capitalize).toBeDefined();
  expect(reversed).toBeDefined();
  expect(calculator).toBeDefined();
  expect(caesarshift).toBeDefined();
  expect(analyzeArray).toBeDefined();
  });

test('Capitalize first letter of string', () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
});


test('Reverse string', () => {
  expect(reversed("Hello")).toBe("olleH");
  expect(reversed("World")).toBe("dlroW");
});

test('Calculator has functions.', () => {
  expect(calculator.add).toBeDefined();
  expect(calculator.substract).toBeDefined();
  expect(calculator.divide).toBeDefined();
  expect(calculator.multiply).toBeDefined();
});

test('Calculator functions work', () => {
  expect(calculator.add(2,3)).toBe(5);
  expect(calculator.divide(4,2)).toBe(2);
  expect(calculator.multiply(4,2)).toBe(8);
  expect(calculator.substract(1,1)).toBe(0);
});

test('Calculator.divide by zero gives undefined', () => {
  expect(calculator.divide(4,0)).toBeUndefined();
});

test('Caesarshift is working', () => {
  expect(caesarshift('abc', 3)).toBe('def');
  expect(caesarshift('abc', 1)).toBe('bcd');
  expect(caesarshift('xyz', 3)).toBe('abc');
  expect(caesarshift('HeLLo', 3)).toBe('KhOOr');
  expect(caesarshift('HeLLo, World', 3)).toBe('KhOOr, Zruog');

});

test('analyzeArray is working', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object.average).toBe(4);
  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
  expect(object.length).toBe(6);


});
