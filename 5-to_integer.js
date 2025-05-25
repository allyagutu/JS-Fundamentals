// This script checks if the first command-line argument can be converted to an integer.
// If it can, it prints "My number: <integer value>".
// Otherwise, it prints "Not a number".

// Get the first user-provided command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the path to the executed script file
// process.argv[2] is the first user-provided argument
const firstArgument = process.argv[2];

// Attempt to convert the first argument to an integer using parseInt().
// parseInt() parses a string argument and returns an integer.
// If the argument cannot be converted to a number, or if it's undefined, parseInt will return NaN.
const convertedNumber = parseInt(firstArgument);

// Check if the result of parseInt() is NaN (Not a Number).
// isNaN() is a global function that determines whether a value is an illegal number (Not-a-Number).
if (isNaN(convertedNumber)) {
  // If the argument cannot be converted to a number, print "Not a number".
  console.log("Not a number");
} else {
  // If the argument was successfully converted to an integer, print it in the specified format.
  console.log(`My number: ${convertedNumber}`);
}
