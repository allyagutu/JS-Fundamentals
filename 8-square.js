// This script prints a square of 'X' characters based on the size provided as the first command-line argument.
// If the argument cannot be converted to a positive integer, it prints "Missing size".

// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the path to the executed script file
// process.argv[2] is the first user-provided argument
const size = parseInt(process.argv[2]);

// Check if the parsed size is Not-a-Number (NaN) or if it's less than or equal to zero.
// If it's NaN (meaning the argument couldn't be converted to a number), print the error message.
// If it's a number but less than or equal to zero, no output is expected, matching the example.
if (isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  // If the size is a valid positive integer, proceed to print the square.
  // The outer loop iterates 'size' times for each row of the square.
  for (let i = 0; i < size; i++) {
    let row = ''; // Initialize an empty string for the current row.
    // The inner loop iterates 'size' times to build each row with 'X' characters.
    for (let j = 0; j < size; j++) {
      row += 'X'; // Append 'X' to the current row string.
    }
    // After building the row, print it to the console.
    console.log(row);
  }
}
// If 'size' is a number <= 0 (e.g., -3, 0), no output is produced,
// which aligns with the provided example behavior for negative numbers.
