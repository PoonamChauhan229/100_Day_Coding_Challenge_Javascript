// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 42 of our 100 Days of Coding Challenge in JavaScript.

// 🌟 Today’s challenge is about checking if two arrays are equal! 🧐

// 🎯 Challenge Overview:
// We need to determine if two arrays are equal by checking:
// 1. Both arrays must have the same length.
// 2. The elements should be the same, even if the order is different.

// Example:
// - [1, 2, 3, 4] and [4, 3, 2, 1] → Arrays are equal.
// - [10, 20, 34] and [20, 10, 33] → Arrays are not equal as the elements differ.

// 🛠️ Approach:
// 1. First, check if both arrays have the same length. If not, they are not equal.
// 2. Sort both arrays to align their elements in order.
// 3. Compare each element of the sorted arrays. If any element differs, the arrays are not equal.

// Let’s dive into the code! 🚀

function areArraysEqual(arr1, arr2) {
    // Step 1: Check if lengths are the same
    if (arr1.length !== arr2.length) {
        console.log("Arrays are not equal: Length mismatch");
        return;
    }

    // Step 2: Sort both arrays to align their elements
    const sortedArr1 = [...arr1].sort(); // Avoids mutating original array
    const sortedArr2 = [...arr2].sort();

    // Step 3: Compare each element
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            console.log("Arrays are not equal: Elements differ");
            return;
        }
    }

    console.log("Arrays are equal");
}

// Example Usage:
const array1 = [1, 2, 3, 4];
const array2 = [4, 3, 2, 1];
areArraysEqual(array1, array2); // Output: "Arrays are equal"

const array3 = [10, 20, 34];
const array4 = [20, 10, 33];
areArraysEqual(array3, array4); // Output: "Arrays are not equal: Elements differ"

// 🔍 Why is this challenge important?
// Array comparison is a frequent operation in coding interviews and real-world projects, such as validating data or implementing sorting algorithms.

// 💡 Fun Fact:
// Sorting makes this problem efficient and straightforward, leveraging JavaScript’s built-in `.sort()` function.

// And that’s all for Day 42! 🎉

// Don’t forget to check out GUVI’s platform for more exciting challenges like this one!
// See you tomorrow for another fun problem to solve. 🚀
