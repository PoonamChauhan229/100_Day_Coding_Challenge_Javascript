
Day 36: Check if a String Matches a Specific Pattern
// Hey everyone, welcome back to Code with Poonam! 🎉

This is Day 36 of our 100 Days of Coding Challenge in JavaScript.

Today’s challenge is all about checking if a string matches a specific pattern. 💡
This challenge will help you get comfortable using regular expressions in JavaScript.

Challenge Overview:
Check if a string follows a specific pattern using regular expressions.
For example, verify if "abc123" contains only letters and numbers.

Approach:

Define the pattern using a regular expression.
Use .test() to check if the string matches the pattern.
Let’s solve this step by step! 🚀

javascript
Copy code
function matchesPattern(str, pattern) {
    console.log("String to Check:", str);
    console.log("Pattern:", pattern);

    // Step 1: Test the string against the pattern
    const result = pattern.test(str);
    console.log("Does it match?", result);

    return result;
}

// Example call to test the function:
const input = "abc123";
console.log(matchesPattern(input, /^[a-zA-Z0-9]+$/)); // Expected output: true
Breakdown of the Example:

The pattern /^[a-zA-Z0-9]+$/ ensures the string contains only letters and numbers.
The string "abc123" matches this pattern, so the result is true.
The string "abc@123" fails the pattern because it contains @.
Try this challenge with your own patterns and see the results!
Regular expressions are incredibly powerful and useful in JavaScript.

And that’s all for today! 🎉
Don’t forget to like, share, and subscribe for more daily coding challenges.
See you tomorrow for another exciting problem to solve! 🚀

