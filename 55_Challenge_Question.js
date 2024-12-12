// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉

// It’s **Day 55** of our 100 Days of Coding Challenge in JavaScript! 🚀  
// Today, we’re solving a simple yet powerful problem: **Finding the Product of All Numbers in an Array**.

// 🚀 Challenge Overview:
// Write a function to calculate the product of all numbers in an array using JavaScript.

// 💡 Example:
// Input: Array: [2, 3, 4]
// Output: 24

// Input: Array: [1, 2, 3, 4, 5]
// Output: 120

// 🚀 Approach:
// In this challenge, we will use the `reduce()` method to calculate the product of all numbers in an array.
// reduce() >> array method >> returns the accumulated value

// 1. Use `reduce()` to iterate through the array, multiplying each element with the accumulator.
// reduce((acc,cv)=>acc*cv) >> returns the accumulated value
// - For the input array [2, 3, 4]:
//   - 2 * 3 = 6
//   - 6 * 4 = 24
// - The final product is 24.

//  🚀 Here’s the Implementation:

function findProduct(arr) {
    // Using `reduce()` to calculate the product
    const product = arr.reduce((acc, cv) => acc * cv);
    console.log(`The product of the array [${arr}] is:`, product);
}

// 🚀 Example Usage:
const numbers = [2, 3, 4];
findProduct(numbers); 
// Output: 24

// 📝 Explanation:
// - The `reduce()` method iterates through the array, multiplying each element with the accumulator.

// 🔑 Why is this challenge important?
// Calculating the product of numbers is a fundamental operation in programming and has applications in:
// - Statistical and mathematical computations
// - Algorithms that involve factorials or cumulative product operations
// - Problem-solving scenarios in competitive programming

// 🎉 A Huge Shoutout to All of You!
// We’re steadily progressing with **Day 55**! Keep practicing and building those coding muscles.  

// Don’t forget to like, share, and subscribe for more coding content. See you tomorrow for **Day 56**! 🚀
