// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉

// It’s Day 51 of our 100 Days of Coding Challenge in JavaScript! 🚀  
// Today, we’re tackling a useful problem: **Finding Missing Numbers in a Range**.  

// 🎯 Challenge Overview:
// Write a function to find all the missing numbers in a given range [lower, upper] that are not present in the array.

// 💡 Example:
// Input: Array: [10, 12, 14, 15], Range: [10, 15]  
// Output: [11, 13]

// 🚀 Approach:
// 1. Define a function `findMissingNumbers` that accepts an array, a lower bound, and an upper bound.
// 2. Create an empty array to store missing numbers.
// 3. Iterate through each number in the range [lower, upper].
// We will be using a for loop to iterate through the range.
// for (let i = lower; i <= upper; i++) {}
// {} >> Write the logic statement to check if the number is in the array or not.
// 4. We will be using the `includes()` method 
// The `includes()` method returns a boolean value indicating whether the specified element is present in the array.
// 5. If it’s not in the array, push it to the missing numbers array.
// push >>> add up the elemnt at the end
// 6. After that iteration, we will log the missing numbers array as the result.

function findMissingNumbers(array, lower, upper) {
    const missingNumbers = [];

    // Iterate through the range [lower, upper]
    for (let i = lower; i <= upper; i++) {
        if (!array.includes(i)) {
            missingNumbers.push(i); // Add missing number to the result
        }
    }

    console.log(`The missing numbers in the range [${lower}, ${upper}] are:`, missingNumbers);
    return missingNumbers;
}

// 🚀 Example Usage:
const array = [10, 12, 14, 15]; // Updated for consistency
const lower = 10;
const upper = 15;

findMissingNumbers(array, lower, upper); 
// Output: [11, 13]

// 📝 Explanation:
// - The input array contains numbers within the range [10, 15], but some are missing.
// - The function iterates through the range and checks which numbers are not in the array.
// - These missing numbers are collected and returned as the result.

// 🔍 Why is this challenge important?
// Finding missing elements in a range is a frequent operation in tasks like:
// - Data validation
// - Detecting missing IDs or sequential elements in datasets
// - Implementing algorithms for sorting or list processing

// 💡 Fun Fact:
// Did you know? Checking for missing numbers efficiently in large datasets can be optimized using **hash sets** for faster lookups, but the `includes()` method works well for smaller arrays like in our example.

// 🎉 A Huge Shoutout to All of You!
// We’re over halfway through the challenge! Let’s keep the momentum going as we dive into even more exciting problems in JavaScript.  

// Don’t forget to like, share, and subscribe for more coding content. See you tomorrow for Day 52! 🚀
