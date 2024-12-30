// Hey everyone! Welcome back to Code With Poonam
// Its Day 71 of our 100 Days of Coding Challenge in JavaScript

//  Today’s challenge is taken from the **GUVI CodeKata** platform.  
// Special thanks to GUVI CodeKata for providing such interesting challenges to sharpen our problem-solving skills. 💻✨  

// 📝 **Problem Statement**: 
// You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.

// Input Description:
// You are given a number ‘n’,Next line contains ‘n’ space separated

// Output Description:
// Print 1 if array is majestic and 0 if it is not

// 🧩 **Input Examples**:  
// 1️⃣ Input: [1, 2, 3, 4, 6, 0, 0] → Output: 1  
// 2️⃣ Input: [1, 2, 3, 4, 5, 0, 0] → Output: 0  

// So here we have to **Determine if an Array is 'Majestic'.** 

// 🛠️ **Approach**: 
// So here we will be Using Loops and Conditionals
// Here we need 2 loops 
// 1 loop will calculate sum of first three numbers and 2nd loop will calculate sum of last three numbers 
// 1️⃣ Initialize variables `firstThree` and `lastThree` to store the sums of the first three and last three elements, respectively.  
// 2️⃣ 1st Loop will run till the first three elements to calculate `firstThree`.  
// for(let i=0;i<3;i++){
    // calculate sum of 1st 3 elements
    // firstThree+=arr[i];
// }
// 3️⃣ Similarly, 2nd loop run till the last three elements to calculate `lastThree`. 
for(let j=arr.length-3;j<arr.length;j++){
    // calculate sum of last 3 elements
    // lastThree+=arr[j];
} 
// 4️⃣ Compare the two sums:  
//     - If they are equal, print `1` (array is majestic).  
//     - Otherwise, print `0` (array is not majestic). 
//  if condition >> if(firstThree===lastThree){1}else{0} 

// 🚀 **JavaScript Implementation**:

function isMajestic(arr) {
    let firstThree = 0; // Sum of the first three numbers
    let lastThree = 0;  // Sum of the last three numbers

    // Calculate sum of the first three numbers
    for (let i = 0; i < 3; i++) {
        firstThree += arr[i];
    }

    // Calculate sum of the last three numbers
    for (let j = arr.length - 3; j < arr.length; j++) {
        lastThree += arr[i];
    }

    // Compare sums and print result
    if (firstThree === lastThree) {
        console.log(1); // Majestic array
    } else {
        console.log(0); // Not a majestic array
    }
}

// 🔢 **Test Cases**:
isMajestic([1, 2, 3, 4, 6, 0, 0]); // Output: 1
isMajestic([1, 2, 3, 4, 5, 0, 0]); // Output: 0
isMajestic([3, 3, 3, 2, 2, 2]);     // Output: 1
isMajestic([5, 1, 2, 0, 0, 0]);     // Output: 0

// 💡 **Why is this challenge useful?**  
// This challenge, provided by **GUVI CodeKata**, strengthens array manipulation and conditional logic skills.  
// It’s particularly useful for working with cumulative sums and validating conditions based on subsets of data.  


// 🎉 That’s it for Day 71! and try out with different input array
// Dont forget to like, share, and subscribe to my channel for more exciting coding challenges!
// Keep practicing Keep Coding and i will see you in next video🚀  
