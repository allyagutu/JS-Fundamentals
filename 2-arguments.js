// This script prints a message based on the number of command-line arguments passed to it.

// process.argv is an array containing the command-line arguments.
// The first element is 'node', and the second element is the path to the executed script file.
// Therefore, to get the actual number of user-provided arguments, we subtract 2 from the length.
const numberOfArguments = process.argv.length - 2;

// Check the number of arguments and print the corresponding message.
if (numberOfArguments === 0) {
  // If no arguments are passed (length is 0 after subtracting 2)
  console.log("No argument");
} else if (numberOfArguments === 1) {
  // If exactly one argument is passed (length is 1 after subtracting 2)
  console.log("Argument found");
} else {
  // If more than one argument is passed
  console.log("Arguments found");
}
