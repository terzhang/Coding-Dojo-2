const {
  sum,
  subtract,
  verifyInput,
  isDivideByTwo,
  isDivisible,
  divideByTwo,
  getLcm,
  findlcd,
} = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('x or y to be numbers', () => {
  expect(verifyInput('a', 'b')).toBe(false);
});

test('is the 20 as argument divisible by 2', () => {
  expect(isDivideByTwo(20)).toBe(true);
});
test('is the 19 as argument divisible by 2', () => {
  expect(isDivideByTwo(19)).toBe(false);
});

test('return is completely divisible', () => {
  expect(isDivisible(4, 2)).toBe(true);
});

// merged the findlcd tests together
test("give correct lowest non-1 common denominator. Return 1 if there's none", () => {
  expect(findlcd(20, 8)).toBe(2);
  expect(findlcd(5, 3)).toBe(1);
  expect(findlcd(4, 2)).toBe(2);
  expect(findlcd(2, 1)).toBe(1);
  expect(findlcd(2,2)).toBe(2);
  expect(findlcd(1,1)).toBe(1);
});

// merged the getLcm tests together
test('get the correct LCM', () => {
  expect(getLcm(4, 2)).toBe(4);
  expect(getLcm(2, 2)).toEqual(2);
  expect(getLcm(3, 8)).toEqual(24);
  expect(getLcm(20, 8)).toBe(40);
  expect(getLcm(1, 1)).toBe(1);
});
