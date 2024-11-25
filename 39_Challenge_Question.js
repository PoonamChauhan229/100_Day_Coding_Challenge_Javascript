// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 39 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is about removing duplicate characters from a string. 💡
// We’ll use JavaScript’s `Set` object to efficiently handle this task.

// 🎯 Challenge Overview:
// Write a function that removes duplicate characters from a string.
// For example:
// Input: `"programming"`
// Output: `"progamin"`

// 🛠️ Approach:
// 1. Use a `Set` to store only unique characters from the string.
// rgm is repeated  >> 
// 2. The {} contains the actual elements stored in the Set.
// 3. Spread Operator (...): Converts the Set back to an array
// 4. join("") convert back into a string

// Let’s dive into the code! 🚀

function removeDuplicates(inputString) {
  console.log("Original String:", inputString);

  // Step 1: Create a Set to store unique characters
  const uniqueCharacters = new Set(inputString);
  console.log("Unique Characters as Set:", uniqueCharacters);

  // Step 2: Convert the Set back to a string
  const resultString = [...uniqueCharacters].join("");
  console.log("String with Duplicates Removed:", resultString);
}

// Example Usage:
removeDuplicates("programming"); // Expected Output: "progamin"// rgm is repeated

removeDuplicates("javascript"); // Expected Output: "javscript"// a is repeated

// 🔍 Breakdown of Example:
// For the input `"programming"`:
// - Step 1: The `Set` will contain: `{ 'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n' }`.
// - Step 2: Convert the `Set` to a string: `"progamin"`.
// - Output: `"progamin"`.

// 🔥 Why this approach?
// - The `Set` object automatically filters out duplicates, making this approach concise and efficient.
// - Using `join()` ensures the result is returned as a string.

// 🚀 Try this function with your own strings and see how it works!

// That’s all for today! 🎉
// Don’t forget to like, share, and subscribe for more daily coding challenges!
// See you tomorrow with an another challenge question Take Care Bye Bye. 🚀
