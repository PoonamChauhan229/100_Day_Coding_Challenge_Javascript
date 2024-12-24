// 🎉 Welcome back to Code with Poonam! 🎉  
// It’s **Day 65** of our 100 Days of Coding Challenge in JavaScript! 🚀  

// 🌟 Sliding Window Series:  
// This week, we’ve been solving **sliding window problems** using loops.  
// - **Day 61 to Day 64:** We worked on sum-related problems, unique substrings, and finding the first negative numbers.  
// - **Today:** We’ll focus on **finding the first positive number** in each subarray of size `k`.  

// 📝 Problem Statement:  
// Write a JavaScript function to find the first positive number in every subarray of size `k`. If no positive number exists in a subarray, return `0`.  

// 🚀 Approach:  
// We use **nested loops** to solve this problem:  
// - Outer loop (`i`): Iterates through each starting point of the subarray of size `k`.  
// - Inner loop (`j`): Traverses the elements of the current subarray to find the first positive number.  

// 💡 Iteration Breakdown:  
//nested loop >> i loop >> j loop
//i loop >> 5 times >> 5 subarrays
// for(let i=0;i<=arr.length-k;i++)>>7-3=4 >>0-4 >> 5 times // - Outer loop (`i`) runs for `5` iterations
//j loop  // - Inner loop (`j`) runs `3` times for each subarray of size `k`.  
// for(let j=i;j<i+k;j++) >>
//i=0 j=0 j<0+3=3 0-2 3times
//i=1 j=1 j<1+3=4 1-3 3times
//i=2 j=2 j<2+3=5 2-4 3times
//i=3 j=3 j<3+3=6 3-5 3times
//i=4 j=4 j<4+3=7 4-6 3times
//i=5 condition fail >> terminate 

//check for 1st +ve Number
// result=[]
// if condition >> arr[j]>0 >> push Method >> break;

// Chcek for if no +ve number is found
//found=false
// +ve num >> found=true >> break 
// no +ve num >> found=false >> no change
// if condition >>if(!found) >> if(false)>> result.push(0);

// AFter everything is done then we will have the final result 

// 🛠️ Code Implementation:
function findFirstPositiveNum(arr, k) {
    let result = []; // To store the first positive number for each window

    for (let i = 0; i <= arr.length - k; i++) {
        let found = false; // Flag to check if a positive number is found

        for (let j = i; j < i + k; j++) {
            if (arr[j] > 0) { // Check for the first positive number
                result.push(arr[j]); // Add the first positive number to the result
                found = true;
                break; // Stop further checks once a positive number is found
            }
        }

        if (!found) { 
            result.push(0); // Add 0 if no positive number is found
        }
    }

    console.log(`First positive number in each subarray of size ${k}:`, result);
}

// Test Cases
findFirstPositiveNum([1, -2, -3, -4, 5, 6, -7], 3); // Output: [1, 0, 5, 5, 5]
findFirstPositiveNum([-12, 13, 14, -16], 3); // Output: [13, 13]
findFirstPositiveNum([-5, -4, -3], 2); // Output: [0, 0]

// 🌟 Key Takeaways:  
// - **Sliding Window with Nested Loops**: This method ensures we check each subarray of size `k` thoroughly.  
// - **Edge Cases**: Consider arrays with no positive numbers or subarrays smaller than `k`.  

// 🚀 Why This Challenge is Important:
// This challenge helps optimize algorithms using the sliding window technique, improving time efficiency. It's crucial for technical interviews and real-world applications like data streaming and packet processing, where handling large datasets efficiently is key.  

// 🚀 Pro Tip:  
// While this approach works well for small datasets, sliding window optimization can reduce unnecessary comparisons in larger datasets.  

// See you tomorrow for **Day 66**, where we’ll explore more sliding window optimizations! 🎉
