Day 34: Convert a camelCase String to snake_case
// Hey everyone, welcome back to Code with Poonam! 🎉

This is Day 34 of our 100 Days of Coding Challenge in JavaScript.

Today’s challenge is all about converting camelCase to snake_case. 💡
String formatting is an essential skill when working with APIs or handling data transformation.

Challenge Overview:
Convert a string in camelCase (e.g., "myVariableName") to snake_case (e.g., "my_variable_name").

Approach:

Use a regular expression to find uppercase letters in the string.
Replace each uppercase letter with an underscore followed by its lowercase equivalent.
Let’s solve this step by step! 🚀

javascript
Copy code
function camelToSnake(str) {
    console.log("Original String:", str);

    // Step 1: Use a regex to replace uppercase letters with '_lowercase'
    const snakeCase = str.replace(/([A-Z])/g, "_$1").toLowerCase();
    console.log("Converted to Snake Case:", snakeCase);

    return snakeCase;
}

// Example call to test the function:
const input = "myVariableName";
console.log(camelToSnake(input)); // Expected output: "my_variable_name"
Breakdown of the Example:

For the string "myVariableName", the regex matches 'V' and 'N'.
These matches are replaced with "_v" and "_n".
The final result is "my_variable_name".
Try this function with other camelCase strings to see how it performs!
This challenge is perfect for practicing regular expressions and string transformations in JavaScript.

And that’s all for today! 🎉
Don’t forget to like, share, and subscribe for more daily coding challenges.
See you tomorrow for another exciting problem to solve! 🚀
