// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 49 of our 100 Days of Coding Challenge in JavaScript! 💻

// 🎯 Today’s Challenge: Inclusive and Exclusive Ranges
// Write a function to check if a number lies strictly within a given range (excluding the boundaries).

// 💡 Example:
// Input: 5, Lower Bound: 1, Upper Bound: 10
// Output: "Yes, It lies strictly within the range"

// Input: 1, Lower Bound: 1, Upper Bound: 10
// Output: "No, It does not lie strictly within the range"

// 🚀 Approach:
// 1. Define the function `isStrictlyWithinRange` that takes three arguments: `number`, `lower`, and `upper`.
// 2. Use a strict comparison condition: `number > lower && number < upper`.
// 3. If the condition is true, log a message stating the number lies strictly within the range (excludes boundaries).
// 4. Otherwise, log a message saying the number does not lie strictly within the range.

// Let’s dive into the code! 🚀

function isStrictlyWithinRange(number, lower, upper) {
    if (number > lower && number < upper) {
        console.log("Yes, It lies strictly within the range");
    } else {
        console.log("No, It does not lie strictly within the range");
    }
}

// 🚀 Example Usage:
isStrictlyWithinRange(5, 1, 10);  // Output: Yes, It lies strictly within the range
isStrictlyWithinRange(1, 1, 10);  // Output: No, It does not lie strictly within the range
isStrictlyWithinRange(10, 1, 10); // Output: No, It does not lie strictly within the range
isStrictlyWithinRange(0, 1, 10);  // Output: No, It does not lie strictly within the range
isStrictlyWithinRange(15, 1, 10); // Output: No, It does not lie strictly within the range

// 📝 Explanation:
// 1. The function checks if the given number is strictly greater than the `lower` bound and strictly less than the `upper` bound.
// 2. If both conditions are true, the number lies strictly within the range (excluding the boundaries).
// 3. If any condition fails, it prints a message saying the number is outside the strict range.

// 🔍 Why is this challenge important?
// Understanding inclusive vs. exclusive boundaries is vital for tasks such as:
// - Data validation where only specific ranges are valid.
// - Enforcing rules in games, algorithms, and systems where edge cases matter.

// 💡 Fun Fact:
// The concept of strict ranges is widely used in programming, especially in fields like mathematics, machine learning, and competitive coding!

// That’s all for today! Don’t forget to like, share, and subscribe for more coding content. See you tomorrow with another exciting challenge! 🚀
