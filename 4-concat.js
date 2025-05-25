// This script prints two command-line arguments in the format "arg1 is arg2".
// If an argument is not provided, it will print "undefined" for that argument.

// process.argv is an array containing the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the path to the executed script file
// process.argv[2] is the first user-provided argument
// process.argv[3] is the second user-provided argument

// Get the first user-provided argument. If not present, it will be undefined.
const firstArgument = process.argv[2];

// Get the second user-provided argument. If not present, it will be undefined.
const secondArgument = process.argv[3];

// Print the arguments in the specified format.
// If an argument is undefined, JavaScript will automatically convert it to the string "undefined".
console.log(`${firstArgument} is ${secondArgument}`);
