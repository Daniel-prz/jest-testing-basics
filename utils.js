"use strict";
function multiply(a, b) {
  const product = a * b;
  console.log(product);
  return product;
}
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check divisibility up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible, not prime
    }
  }

  return true; // If not divisible by any number, prime
}
module.exports = { multiply, isPrime };
