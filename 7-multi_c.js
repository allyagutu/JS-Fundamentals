// This script prints "C is fun" a number of times specified by the first command-line argument.
// If the argument cannot be converted to a positive integer, it handles the output accordingly.

// Get the first command-line argument provided by the user.
// process.argv[0] is 'node'
// process.argv[1] is the path to the executed script file
// process.argv[2] is the first user-provided argument
const numberOfOccurrences = parseInt(process.argv[2]);

// Check if the parsed number is Not-a-Number (NaN) or if it's less than or equal to zero.
// If it's NaN (meaning the argument couldn't be converted to a number), print the error message.
// If it's a number but less than or equal to zero, no output is expected, matching the example.
if (isNaN(numberOfOccurrences)) {
  // This is the first allowed console.log call.
  console.log("Missing number of occurrences");
} else if (numberOfOccurrences > 0) {
  // If the argument is a valid positive integer, proceed with the loop.
  // Use a for loop to iterate from 0 up to (but not including) numberOfOccurrences.
  for (let i = 0; i < numberOfOccurrences; i++) {
    // This is the second allowed console.log call, which will be executed 'x' times.
    console.log("C is fun");
  }
}
// If numberOfOccurrences is a number <= 0 (e.g., -3, 0), no output is produced,
// which aligns with the provided example behavior for negative numbers.
