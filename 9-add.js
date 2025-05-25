// This script defines a function to add two numbers and then prints the sum
// of two integers provided as command-line arguments.

/**
 * Adds two numbers together.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of 'a' and 'b'.
 */
function add(a, b) {
  // Return the sum of the two input parameters.
  return a + b;
}

// Get the first command-line argument and convert it to an integer.
// If the argument is not provided or cannot be parsed, parseInt will return NaN.
const num1 = parseInt(process.argv[2]);

// Get the second command-line argument and convert it to an integer.
// If the argument is not provided or cannot be parsed, parseInt will return NaN.
const num2 = parseInt(process.argv[3]);

// Call the add function with the parsed numbers and print the result.
// If either num1 or num2 is NaN, the addition operation will result in NaN,
// which matches the expected output for missing or invalid arguments.
console.log(add(num1, num2));
