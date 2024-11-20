// Day 34: Convert a camelCase String to snake_case
// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 34 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about converting camelCase to snake_case. 💡
// String formatting is an essential skill when working with APIs or handling data transformation.

// Challenge Overview:
// Write a JavaScript Function to convert a string from CamelCase to SnakeCase 

// Input:"myVariableName"
// Output:"my_variable_name".

// Approach:

// replace() >> it takes 2 args >> what we want to replace & what needs to be updated

// Use a regular expression to find uppercase letters in the string.
// /([A-Z])/g >> Finding the Upper Case >> what we want to replace
// We will replace with _$1 
// The $1 refers to the first captured group in the regular expression. 
// In this case, the group ([A-Z]) matches an uppercase letter.
// By replacing it with _$1, it adds an underscore _ before the matched uppercase letter while keeping the letter itself
// Lastly we will convert it everything into lowerCase >>toLowerCase()

// Let’s solve this step by step! 🚀

function camelToSnake(str) {
    console.log("Original String:", str);

    // Step 1: Use a regex to replace uppercase letters with '_lowercase'
    const snakeCase = str.replace(/([A-Z])/g, "_$1").toLowerCase();
    console.log("Converted to Snake Case:", snakeCase);
}

// Example call to test the function:
camelToSnake("myVariableName"); // Expected output: "my_variable_name"

// Breakdown of the Example:

// For the string "myVariableName", the regex matches 'V' and 'N'.
// These matches are replaced with "_v" and "_n".
// The final result is "my_variable_name".

// Try this function with other camelCase strings to see how it performs!
// This challenge is perfect for practicing regular expressions and string transformations in JavaScript.

// And that’s all for today! 🎉
// Don’t forget to like, share, and subscribe for more daily coding challenges.
// See you tomorrow for another exciting problem to solve! 🚀
