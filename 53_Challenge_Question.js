// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉

// It’s **Day 53** of our 100 Days of Coding Challenge in JavaScript! 🚀  
// Today’s challenge is all about **Finding Common Elements Between Two Arrays**. 

// 🚀 Challenge Overview:
// Write a JS function to find the common elements between two given arrays.

// 🎯 Approach:
// 1. Define a function `findCommonElements` that accepts two arrays as input.
// 2. Use the `filter()` method
// filter() works on each element of an array and returns a new array containing elements that pass a condition specified by a callback function.
// filter method takes a callback function as an argument.
// In that cbk function we pass our condition and on the basis of that condition we return true or false.
// filter() >> true values >>[]
// 3. For each element, check if it exists in the second array using `includes()`.
// 4. Return the resulting array that contains all the common elements.

// 💡 Example:
// Input: Array 1: [1, 2, 3, 4], Array 2: [3, 4, 5, 6]
// Output: [3, 4]

// 🚀 Here’s how we can implement this:

function findCommonElements(arr1, arr2) {
    const commonElements = arr1.filter(element => arr2.includes(element));
    console.log(`Common elements:`, commonElements);
    return commonElements;
}

// 🚀 Example Usage:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

findCommonElements(array1, array2);
// Output: [3, 4]

// 📝 Explanation:
// - We use `filter()` on `arr1` to go through each element.
// - We use `includes()` to check if that element exists in `arr2`.
// - The common elements are returned and logged.


// 🔍 Why is this challenge important?
// Finding common elements between arrays is a fundamental task in:
// - Data comparison and validation
// - Merging datasets
// - Implementing features like search filters, recommendations, etc.


// 🎉 A Huge Shoutout to All of You!
// We’re making excellent progress! Let’s keep up the momentum and dive into more challenges.  

// Don’t forget to like, share, and subscribe for more coding content. See you tomorrow for **Day 54**! 🚀

