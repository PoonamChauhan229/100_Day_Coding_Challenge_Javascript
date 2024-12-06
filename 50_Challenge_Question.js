// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉

// Today marks **Day 50** of our 100 Days of Coding Challenge in JavaScript! 🥳  
// Can you believe it? We’ve made it halfway through the challenge, starting from Day 1!  
// Thank you for sticking with me on this incredible journey. Let’s keep going strong! 🚀  

// 🎯 Today’s Challenge: Sum of Numbers in a Range
// Write a function that calculates the sum of all integers in a range [lower, upper].

// 💡 Example:
// Input: Lower Bound: 1, Upper Bound: 5  
// Output: 15 (1 + 2 + 3 + 4 + 5)

// Input: Lower Bound: 3, Upper Bound: 7
// Output: 25 (3 + 4 + 5 + 6 + 7)

// JS Function                             >>sumOfRange()
// Calculate the sum of all integers in a range


// 🚀 Approach:
//  
// 1. Define a function `sumOfRange` that takes two arguments: `lower` and `upper` bounds.
// 2. Validate that `lower` is less than or equal to `upper`.
// To validate, we have to use the If conditional statement:
//    - If `lower` is greater than `upper`, log an error message and return.
// if(lower>upper) >>Error Message and return 
// 3. Use a loop to iterate through all integers between `lower` and `upper` (inclusive).
// We will create a variable `sum` to store the sum of all integers in the range and initialize it to 0.
// loop > start from lower end at upper
// for(let i=lower;i<=upper;i++)
// 4. Add each integer to a cumulative sum variable.
// sum=sum+i >> Once the loop ends we will have the sum and we log the sum

function sumOfRange(lower, upper) {
    if (lower > upper) {
        console.error("Lower bound must be less than or equal to upper bound.");
        return;
    }

    let sum = 0;
    for (let i = lower; i <= upper; i++) {
        sum += i; // Add each integer in the range to the sum
    }

    console.log(`The sum of all integers in the range [${lower}, ${upper}] is:`, sum);
    return sum;
}

// 🚀 Example Usage:
sumOfRange(1, 5); // Output: 15 (1 + 2 + 3 + 4 + 5)
sumOfRange(3, 7); // Output: 25 (3 + 4 + 5 + 6 + 7)
sumOfRange(5, 5); // Output: 5 (only one number in the range)
sumOfRange(10, 2); // Output: Error: Lower bound must be less than or equal to upper bound.

// 📝 Explanation:
// - The function checks if the lower bound is valid (not greater than the upper bound).
// - If valid, it calculates the sum of all integers from the lower to upper bounds (inclusive).
// - If invalid, it logs an error message and stops execution.

// 🔍 Why is this challenge important?
// Calculating sums in a range is a fundamental operation in programming, often used in:
// - Data aggregation tasks
// - Mathematical computations
// - Implementing algorithms where range processing is required


// 🎉 A HUGE Thank You! 🎉
// Reaching Day 50 wouldn’t have been possible without your support and enthusiasm!  
// Let’s keep building and coding together as we march toward Day 100!  

// That’s all for today. Don’t forget to like, share, and subscribe for more coding content.  
// See you tomorrow for Day 51! 🚀
