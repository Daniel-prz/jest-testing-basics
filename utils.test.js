"use strict";

const { multiply, isPrime } = require("./utils");

it("multiplies values correctly", () => {
  expect(multiply(2, 2)).toEqual(4);
  expect(multiply(2, 0)).toEqual(0);
  expect(multiply(-2, 2)).toEqual(-4);
  expect(multiply(-2, -2)).toEqual(4);
});
it("correctly identifies prime numbers", () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(-1)).toBe(false);
  expect(isPrime(0)).toBe(false);
  expect(isPrime(3)).toBe(true);
});
