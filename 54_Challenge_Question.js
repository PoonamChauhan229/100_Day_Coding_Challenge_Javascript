// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉

// It’s **Day 54** of our 100 Days of Coding Challenge in JavaScript! 🚀  
// Today, we’ll explore **Finding Squares of Elements in an Array** in two different ways.

// 🚀 Challenge Overview:
// Write a function to find the square of each element in a given array 

// 💡 Example:
// Input: Array: [1, 2, 3, 4]
// Output: [1, 4, 9, 16]

// 🚀 Approach:
// map() is a powerful array method that allows you to transform each element in an array by applying a function to it.
//map() takes a function as an argument, which is called for each element in the array.
//arr.map((element) => {calcuation})

//map() can be used in two different ways:

// 1. **Using `map()` with a normal multiplication operator**: 
// Multiply each element by itself.

// 2. **Using `map()` with `Math.pow()`**: 
// Use the built-in `Math.pow()` function to calculate the square.
// Math.pow >> Returns the value of x to the power of y >>x=element >>y=2
// Math.pow()>>Math.pow(element,2)

// 🚀 Here’s the Implementation:

function findSquare(arr) {
    // Approach 1: Using `map()` with normal multiplication
    const squareNormal = arr.map(element => element * element);
    console.log(`Squares using normal multiplication:`, squareNormal);

    // Approach 2: Using `map()` with `Math.pow()`
    const squareMap = arr.map(element => Math.pow(element, 2));
    console.log(`Squares using Math.pow():`, squareMap);

    return { squareNormal, squareMap };
}

// 🚀 Example Usage:
findSquare([1, 2, 3, 4]); 
// Output: 
// Squares using normal multiplication: [1, 4, 9, 16]
// Squares using Math.pow(): [1, 4, 9, 16]

// 📝 Explanation:
// - **Approach 1**: `arr.map()` iterates over the array, and `element * element` calculates the square of each element.
// - **Approach 2**: `Math.pow(element, 2)` is used to calculate the square in a more mathematical format.

// 🔑 Why is this challenge important?
// Squaring numbers is a simple yet foundational concept in mathematics and programming, often used in:
// - Machine learning algorithms
// - Geometry calculations
// - Physics simulations

// 🎉 A Huge Shoutout to All of You!
// We’ve successfully solved the problem using two approaches. Let’s keep the momentum going as we explore more ways to think creatively in coding.  

// Don’t forget to like, share, and subscribe for more coding content. See you tomorrow for **Day 55**! 🚀
