// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 43 of our 100 Days of Coding Challenge in JavaScript! 💻

// Today, we’re solving a practical problem: Removing All Occurrences of a Specific Element from an Array! 🛠️

// 🎯 Challenge Overview:
// Write a function to remove all occurrences of a given value from an array.

// Example:
// Input: [1, 2, 3, 4, 2, 2], target = 2
// Output: [1, 3, 4]

// 🔑 Key Idea:
// Use JavaScript's `filter()` method to create a new array excluding all occurrences of the target value.

// Let’s dive into the code! 🚀

function removeOccurrences(arr, target) {
    console.log("Original Array:", arr);
    console.log("Target to Remove:", target);

    // Step 1: Use filter to exclude the target value
    const result = arr.filter(element => element !== target);

    // Step 2: Return or log the result
    console.log("Updated Array:", result);
    return result;
}

// Example Usage:
const array = [1, 2, 3, 4, 2, 2];
const targetValue = 2;

removeOccurrences(array, targetValue); // Output: [1, 3, 4]

// Explanation:
// 1. The array [1, 2, 3, 4, 2, 2] contains three occurrences of 2.
// 2. The filter method removes all occurrences of 2, leaving [1, 3, 4].

// Try this function with your own arrays to see the magic in action! ✨

// GUVI's CodeKata is an amazing playground for coders like us to practice challenges like this. Head over to their platform and upskill yourself! 🔥

// That’s all for today! Don’t forget to like, share, and subscribe for more coding content. See you tomorrow with another exciting problem! 🚀
