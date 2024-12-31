// 🌟 **Day 72 Challenge** 🌟  
// Hey everyone! Welcome back to Code with Poonam.
// Its day 72 of the 100 Days of JavaScript Coding Challenge.

// Today’s challenge is to calculate the **Prefix Sum Array**.  
// This is a common and useful technique in programming for cumulative calculations.  

// 📝 **Problem Statement**:  
// Write a JS function to calculate the prefix sum array of a given array.

// 🧩 **Input Example**:  
// 1️⃣ Input: [2, 4, 4, 2] → Output: [2, 6, 10, 12]  

// 🛠️ **Approach**:  
// The prefix sum array is an array where each element at index `i` is the sum of all elements from index `0` to `i` in the original array. 
// 1️⃣ Initialize an empty array `sumPrefix` to store the prefix sums.  
// 2️⃣ Use a loop to traverse the input array while maintaining a running sum.  
// 3️⃣ For each element, add it to the running sum and push the result to `sumPrefix`.  
// 4️⃣ Print the prefix sum array.  

// 🚀 **JavaScript Implementation**:
function prefixSum(arr) {
    let sumPrefix = []; // Initialize prefix sum array
    let sum = 0;        // Running sum variable

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];        // Update running sum
        sumPrefix.push(sum);  // Add the current sum to the prefix sum array
    }
    console.log(sumPrefix); // Print the prefix sum array
}

// 🔢 **Test Cases**:
prefixSum([2, 4, 4, 2]);    // Output: [2, 6, 10, 12]
prefixSum([1, 1, 1, 1, 1]); // Output: [1, 2, 3, 4, 5]
prefixSum([10, 20, 30]);    // Output: [10, 30, 60]
prefixSum([5, 0, 0, 5]);    // Output: [5, 5, 5, 10]

// 💡 **Why is this challenge useful?**  
// The **prefix sum technique** is widely used in various computational problems, including range queries, cumulative calculations, and dynamic programming.  
// This challenge helps you understand the logic and practice the implementation of cumulative sums efficiently.  

// 🎉 That’s it for Day 72!
// Dont forget to like, subscribe, and hit the notification bell so you don't miss any of the future challenges.
//  Keep practicing and challenging yourself. See you in the next challenge! 🚀  
