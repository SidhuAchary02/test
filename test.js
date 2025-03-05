/**
 * @file test.js
 * @description This file contains a function to calculate the sum of two numbers.
 * It is an example of how to write well-documented JavaScript code for generating documentation.
 */

/**
 * @description Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of `a` and `b`.
 * @example
 * // Returns 5
 * add(2, 3);
 */
function add(a, b) {
  return a + b;
}

/**
 * @description Calculates the factorial of a number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} The factorial of `n`.
 * @throws {Error} Throws an error if `n` is a negative number.
 * @example
 * // Returns 120
 * factorial(5);
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * @description A class representing a Person.
 * @class
 */
class Person {
  /**
   * @description Creates an instance of Person.
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * @description Greets the person.
   * @returns {string} A greeting message.
   * @example
   * // Returns "Hello, John!"
   * const person = new Person("John", 25);
   * person.greet();
   */
  greet() {
    return `Hello, ${this.name}!`;
  }
}

// Export the functions and class for use in other modules
module.exports = {
  add,
  factorial,
  Person,
};
