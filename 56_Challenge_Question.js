// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉

// It’s **Day 56** of our 100 Days of Coding Challenge in JavaScript! 🚀  
// Today’s challenge is all about calculating the **Average of an Array**.

// 🚀 Challenge Overview:
// Write a JS function to calculate the average of all numbers in a given array.

// 💡 Example:

// Input: [10, 20, 30, 40, 50] 
// Output: 30  

// Input: [1, 2, 3, 4, 5]  
// Output: 3  

// 🚀 Approach:

// 1. Use the `reduce()` method to calculate the sum of all elements in the array.

// reduce() >> array method >> returns the accumulated value

// 1. Use `reduce()` to iterate through the array adding each element to the accumulator

// reduce((acc,cv)=>acc+cv) >> returns the accumulated value

// 2. Divide the sum by the total number of elements (`arr.length`) to find the average.

// accumulator/total number of elements >> average

// - For the input array [10, 20, 30, 40, 50]:
//   - Sum = 10 + 20 + 30 + 40 + 50 = 150
//   - Average = Sum / Total Elements = 150 / 5 = 30
// 3. Return or log the result.

// 🚀 Here’s the Implementation:

function calculateAverage(arr) {
    // Calculate the sum using `reduce()`
    const sum = arr.reduce((total, num) => total + num, 0);

    // Calculate the average
    const avg = sum / arr.length;

    console.log(`The average of an array [${arr}] is:`, avg);
}

// 🚀 Example Usage:
const numbers = [10, 20, 30, 40, 50];
calculateAverage(numbers); // Output: 30

// 📝 Explanation:
// - `reduce()` is used to sum up all the elements in the array.
// - The total sum is then divided by `arr.length` to calculate the average.


// 🔑 Why is this challenge important?
// Calculating the average is a basic yet critical operation used in:
// - Statistical data analysis
// - Computing grades or performance metrics
// - Aggregating results in algorithms

// 🎉 A Huge Shoutout to All of You!
// We’ve reached **Day 56**, and the momentum is amazing! Let’s keep pushing forward with more exciting challenges every day.  

// Don’t forget to like, share, and subscribe for more coding content. See you tomorrow for **Day 57**! 🚀
