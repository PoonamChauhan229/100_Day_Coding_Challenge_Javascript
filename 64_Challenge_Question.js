// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉  
// It’s Day 64 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// 🌟 Sliding Window Series:  
// Over the last three days, we have been solving problems using the **sliding window technique** with nested loops.  
// - **Day 62:** We started with finding the maximum sum of a subarray of size `k`.  
// - **Day 63:** We solved a problem to find the smallest subarray with a sum greater than a given value.  

// 📌 **Today’s Challenge:**  
// Today, we are diving into another classic **sliding window** problem. This time, we’ll focus on finding the first negative number in each subarray of size `k`.  

// 🔥 Problem Statement:  
// Write a JavaScript function to find the first negative number in each subarray of size `k`.  

// 📝 Input Example:  
// Input: [1, -2, -3, -4, 5, 6, -7], k = 3  
// Output: [-2, -3, -4, -7]  

// 🚀 Approach:  
// 1️⃣ **Understand the Sliding Window Concept:**  
// The sliding window technique helps to analyze a subset (or "window") of the array without recalculating values for overlapping parts.  
// For this problem, each "window" will consist of `k` consecutive elements.  

// 2️⃣ **Iterate Through the Array:**  
// - Use a **nested loop** for this problem:
//   1️⃣ Outer loop (`i`) iterates over the starting index of each sliding subarray.
//  - Outer loop > run 5 times  >> arr.length - k = 7-3 = 4  >> 0-4 >> 5 times
// for(let i=0;i<=arr.length-k;i++){
    
// }
//   2️⃣ Inner loop (`j`) gathers elements of the current subarray.
//nested loop >> i loop >> j loop 
// i loop >> 5 times >> 5 subarray
// result=[]
//for(let i=0;i<=arr.length-k;i++)   >>7-3=4{
    // for(let j=i;j<i+k)//subarray >>3 >> 3 times
    // i=0 j=0 j<0+3=3 0-2   >> 3times
    // i=1 j=1 j<1+3=4 1-3   >> 3times
    // i=2 j=2 j<2+3=5 2-4   >> 3times
    // i=3 j=3 j<3+3=6 3-5   >> 3times
    // i=4 j=4 j<4+3=7 4-6   >> 3times
    // i=5 loop terminate 

// 3️⃣ **Check for Negative Numbers:**  
// For each window, use a nested loop to examine the elements and find the **first negative number**.  

// if (arr[j] < 0) { // Check for the first negative number
//     result.push(arr[j]); // Add the first negative number to the result
//     break; // Stop checking once a negative number is found
// }

// As soon as you find a negative number, store it in the result array and stop further checks for that window.  

// If a window does not contain any negative numbers, you can skip or add anything to the result or handle it based on the requirement.  

// 🛠️ Code Implementation:  
function findFirstNegative(arr, k) {
    let result = []; // To store the first negative number for each window

    // Slide through the array with a window size of k
    for (let i = 0; i <= arr.length - k; i++) {  
        for (let j = i; j < i + k; j++) {
            if (arr[j] < 0) { // Check for the first negative number
                result.push(arr[j]); // Add the first negative number to the result
                break; // Stop checking once a negative number is found
            }
        }
    }

    console.log(...result); // Output the result
}

// Test Cases
findFirstNegative([1, -2, -3, -4, 5, 6, -7], 3);  // Expected Output: -2 -3 -4 -7
findFirstNegative([12, -1, -7, 8, -15, 30, 16, 28], 3);  // Expected Output: -1 -1 -7 -15 -15
findFirstNegative([1, 2, 3, 4, 5], 2);  // Expected Output: No negative numbers

// 🎉 Key Takeaways:  
// - The sliding window technique is highly effective for analyzing subarrays with overlapping elements.  
// - Nested loops allow us to find the first negative number in each subarray of size `k`.  
// - While this solution works well for small arrays, larger datasets may require optimization, such as using a **queue** or other data structures.  

// 🌟 Pro Tip:  
// Always handle edge cases, like when there are no negative numbers in the entire array or when the array size is smaller than `k`.  

// 🚀 That’s all for today’s challenge!  
// Stay tuned for **Day 65**, where we’ll solve another exciting problem using the sliding window technique.  
// Don’t forget to like, share, and subscribe to my channel for more coding content. Keep learning and growing! 🌟
