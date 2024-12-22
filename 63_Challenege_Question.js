// 🎉 Welcome to Day 63 of the 100 Days of Coding Challenge in JavaScript! 🎉  
// Today’s challenge: Find the maximum value in every sliding subarray of size `k`.

// 🔥 Problem Statement:
// Write a JavaScript function to find the maximum value in every sliding subarray of size `k`.

// 📝 Input Example:
// Input Array: [1, -2, -3, -4, 5, 6, -7]
// k = 3
// Output: [1, -2, 5, 6, 6]

// 🚀 Approach:
// - Use a **nested loop** for this problem:
//   1️⃣ Outer loop (`i`) iterates over the starting index of each sliding subarray.
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

    //Find max val subarray
    // - Push the elements of each subarray into a temporary array (`temp`).
    //temp=[] >> subarray store >> pushMethod

    // - Use `Math.max(...temp)` to find the largest value in the subarray.
    //Math.max(...temp)   >> maxVal

    // - Store each maximum value in the `result` array.
// - Print the result array as the output.

    // result.push(maxVal)
    // }
    // result >> Max val >> Final output


// 🛠️ Code Implementation:
function findMaxInSubArray(arr, k) {
    let result = []; // Array to store maximum values of subarrays
    for (let i = 0; i <= arr.length - k; i++) { // Outer loop: iterate through starting indices
        let temp = []; // Temporary array to store elements of the subarray
        for (let j = i; j < i + k; j++) { // Inner loop: collect subarray elements
            temp.push(arr[j]);
        }
        const maxVal = Math.max(...temp); // Find the maximum value in the subarray
        result.push(maxVal); // Store the maximum value
    }
    console.log(`Maximum values of Subarray:`, result);
}

// 🔍 Test the function:
const inputArray = [1, -2, -3, -4, 5, 6, -7];
const k = 3;
console.log("Input Array:", inputArray);
console.log("Subarray Size (k):", k);
findMaxInSubArray(inputArray, k); // Output: [1, -2, 5, 6, 6]

// 🎉 Key Takeaways:
// - **Subarray Size (`k`)** determines how many elements are considered at a time.
// - The solution uses a **brute force approach** by evaluating all possible subarrays of size `k`.
// - Using `Math.max` with the spread operator is a powerful and concise way to find the maximum value.

// Challenge Important:
// This challenge is important because it helps you understand the sliding window technique, which is crucial for optimizing solutions to problems involving sequential data. It also improves your problem-solving skills and prepares you for coding interviews, where such algorithmic challenges are common.

// 📝 Reference:
// In Day 62, we solved the problem for finding the **minimum value** in every sliding subarray of size `k`. The approach is quite similar to this one, where we used `Math.min(...temp)` to find the minimum values. Today, we’ve adapted the logic to find the maximum value in the sliding subarrays. Take a look at Day 62 if you missed it! 

// 🚀 That’s it for Day 63! Keep coding, stay consistent, and see you tomorrow for Day 64! 🎉
