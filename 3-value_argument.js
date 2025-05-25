// This script prints the first command-line argument passed to it.
// If no argument is provided, it prints "No argument".

// process.argv is an array containing the command-line arguments.
// process.argv[0] is 'node'
// process.argv[1] is the path to the executed script file
// process.argv[2] is the first user-provided argument

// Get the first user-provided argument directly.
// If no argument is provided, process.argv[2] will be undefined.
const firstArgument = process.argv[2];

// Check if the firstArgument is undefined (meaning no argument was passed by the user).
if (firstArgument === undefined) {
  // If no argument, print "No argument".
  console.log("No argument");
} else {
  // If an argument exists, print its value.
  console.log(firstArgument);
}
