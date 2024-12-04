// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 48 of our 100 Days of Coding Challenge in JavaScript! 💻

// 🎯 Today’s Challenge: Check if a Number is Within a Given Range
// Write a function that checks if a given number lies between a specified lower and upper bound (inclusive).

// 💡 Example:
// Input: 5, Lower Bound: 1, Upper Bound: 10
// Output: "Yes, It lies within the range"

// Input: 15, Lower Bound: 1, Upper Bound: 10
// Output: "No, It does not lie within the range"

// 🚀 Approach:
// 1. Define the function `isWithinRange` which takes three arguments: `number`, `lower`, and `upper`.
// 2. Use a simple `if` condition to check if the `number` is greater than or equal to `lower` and less than or equal to `upper`.
// 3. If the number satisfies the condition, log a message stating that the number lies within the range.
// 4. If the number doesn’t satisfy the condition, log a message saying it doesn’t lie within the range.
// 5. The function will check both bounds inclusively (i.e., both `lower` and `upper` values are part of the range).

// Let's check out the code! 🚀

function isWithinRange(number, lower, upper) {
    if (number >= lower && number <= upper) {
        console.log("Yes, It lies within the range");
    } else {
        console.log("No, It does not lie within the range");
    }
}

// 🚀 Example Usage:
isWithinRange(5, 1, 10); // Output: "Yes, It lies within the range"
isWithinRange(15, 1, 10); // Output: "No, It does not lie within the range"

// 📝 Explanation:
// 1. The function checks if the given number falls between the lower and upper bounds (inclusive).
// 2. If the condition `number >= lower && number <= upper` is true, it prints a message indicating that the number is within the range.
// 3. Otherwise, it prints a message indicating the number is outside the range.

// 🔍 Why is this challenge important?
// Range checking is essential in many applications, such as validating user input, setting limits for data processing, and implementing constraints in algorithms.

// 💡 Fun Fact:
// You can also apply this logic in games, security systems, and even for setting password strength constraints!

// That’s all for today! Don’t forget to like, share, and subscribe for more coding content. See you tomorrow with another exciting challenge! 🚀

  