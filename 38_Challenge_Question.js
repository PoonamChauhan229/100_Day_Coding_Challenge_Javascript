// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 38 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about rotating an array by `k` positions to the right. 💡
// We’ll use basic JavaScript methods like `pop()` and `unshift()` to solve this problem.

// 🎯 Challenge Overview:
// Write an Function to Rotate an array `k` times.

// For example:
// Input: `array = [1, 2, 3, 4, 5], rotations = 2`
// Output: `[4, 5, 1, 2, 3]`

// 🛠️ Approach:
// 1. Remove the last element of the array using `pop()`.
// 2. Insert that element at the beginning using `unshift()`.
// 3. Repeat this process `k` times.

// Let’s write the code! 🚀

function rotateArrayRight(array, rotations) {
    console.log("Original Array:", array);
    console.log("Rotations:", rotations);

    // Rotate the array
    for (let i = 0; i < rotations; i++) {
        const lastElement = array.pop(); // Remove the last element
        array.unshift(lastElement); // Add it to the beginning
    }

    console.log("Rotated Array:", array);

}
rotateArrayRight([1, 2, 3, 4, 5], 2); // Expected Output: [4, 5, 1, 2, 3]

rotateArrayRight([10, 20, 30, 40, 50], 3); // Expected Output: [30, 40, 50, 10, 20]

// 🔍 Breakdown of Example:
// For `array1 = [1, 2, 3, 4, 5]` and `rotations1 = 2`:
// - Step 1: First rotation: Remove `5` and add it to the front: `[5, 1, 2, 3, 4]`.
// - Step 2: Second rotation: Remove `4` and add it to the front: `[4, 5, 1, 2, 3]`.
// - Output: `[4, 5, 1, 2, 3]`.

// 🔥 Why this approach?
// Using `pop()` and `unshift()` demonstrates how simple array methods can efficiently perform right rotations step by step.

// 🚀 Try it out with your own arrays and values of `rotations` to get hands-on experience!

// That’s all for today! 🎉
// Don’t forget to like, share, and subscribe for more daily coding challenges!
// See you tomorrow for another exciting problem to solve. 🚀
