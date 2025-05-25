// This script prints three different lines to the console using an array and a loop.

// Create a constant array containing the three strings to be printed.
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Use a for...of loop to iterate over each element in the 'languages' array.
// This loop structure allows us to access each string directly without using an index.
// It also ensures that we use only one console.log call within the loop's body,
// satisfying the constraint of using only one console.log statement.
for (const line of languages) {
  // Print each line to the console.
  console.log(line);
}
