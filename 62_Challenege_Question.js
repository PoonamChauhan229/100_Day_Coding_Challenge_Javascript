// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉  
// It’s Day 62 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// Today’s challenge is to find the minimum value in every contiguous subarray of size `k`.  

// 🔥 Problem Statement:  
// Write a JavaScript function to find the minimum value in every contiguous subarray of size `k`.  

// 📝 Input Example:  
// Input Array: [1, -2, -3, -4, 5, 6, -7]  
// k = 3  
// Output: [-3, -4, -4, -4, -7]  

// 🚀 Approach:  
// 1️⃣ Use a nested loop:  
//   - Outer loop iterates over the starting index of each subarray. 
//  - Outer loop > run 5 times  >> arr.length - k = 7-3 = 4  >> 0-4 >> 5 times
// for(let i=0;i<=arr.length-k;i++){
    
// }
//   - Inner loop gathers elements for the current subarray of size `k`.  
// Inner loop runs 3 times  and it has to be shift along with i loop
// for (let j = i; j < i + k; j++) { 
//  j=0; j<0+3=3;  0-2 >> 3 times
//  j=1; j<1+3=4;  1-3 >> 3 times
//  j=2; j<2+3=5;  2-4 >> 3 times
//  j=3; j<3+3=6;  3-6 >> 3 times
//  j=4; j<4+3=7;  4-7 >> 3 times 
// }
// 2️⃣ Store elements of each subarray in a temporary array by using push method(). >> temp=[] 
// 3️⃣ Use `Math.min` to find the smallest value in the subarray stored in temporary array.
//Declare the final resultant array >> result=[]  
// 4️⃣ Push the minimum value into the result array.  
// 5️⃣ Return the result array after processing all subarrays.  

// 🛠️ Code Implementation:  
function findMinInSubarrays(arr, k) {
    let result = []; // Array to store minimum values of subarrays
    for (let i = 0; i <= arr.length - k; i++) { // Iterate over starting indices
        let temp = []; // Temporary array to hold the current subarray
        for (let j = i; j < i + k; j++) { // Gather elements of the subarray
            temp.push(arr[j]);
        }
        const minVal = Math.min(...temp); // Find the minimum value of the subarray
        result.push(minVal); // Add the minimum value to the result array
    }
    // Return the array of minimum values
    console.log("Minimum Values of Subarrays:", result)
}

// 🔍 Example Usage:  
 findMinInSubarrays([1, -2, -3, -4, 5, 6, -7], 3);


// 🎉 Key Takeaways:  
// - Contiguous subarrays are sub-sequences of the array formed by consecutive elements.  
// - The challenge reinforces the use of nested loops and array operations in JavaScript.  

// 🌟 Why This Challenge Is Important:  
// - Builds your understanding of sliding window problems, often used in competitive programming.  
// - Strengthens logical thinking and loop optimization skills.  

// 🚀 What’s Next?  
// We’ll revisit this challenge in a future day to optimize it using the **sliding window** technique for better performance.  

// 🌟 Pro Tip of the Day:  
// Start solving problems using a simple approach and then iterate to optimize as you understand the logic better.  

// 🚀 That’s all for Day 62! Keep coding, keep challenging yourself, and see you tomorrow for Day 63! 🎉  
