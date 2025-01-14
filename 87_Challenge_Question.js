// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 87 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today’s challenge is to create an object where keys are numbers and values are their squares.

// 📝 **Problem Statement:**  
// Write a function to create an object with keys as numbers and values as their squares.

// 📦 **Input:** 2  
// 📦 **Output:** { 1: 1, 2: 4 }

// 📦 **Input:** 4  
// 📦 **Output:** { 1: 1, 2: 4, 3: 9, 4: 16 }

// 📦 **Input:** 6  
// 📦 **Output:** { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36 }

// 🛠️ **Approach (Step by Step Explanation):**

// 1️⃣ **Initialize an Empty Object:**  
//    - Create an empty object `result` to store key-value pairs.
//  result = {}

// 2️⃣ **Loop through Numbers from 1 to n:**  
//    - Use a `for` loop to iterate from 1 to `n`.
//    - `n` represents the upper limit of the loop.
//    - `i` represents the current number being processed.
// for(let i=1;i<=n;i++){
    // result[i] = i * i; 
// }

//    - Inside the loop, assign the current number as the key and its square as the value.
// 3️⃣ **Calculate Squares and Store in Object:**  
//    - For each number, calculate its square and assign it as the value for the corresponding key in the object.  
//    - Example: For `n=3`, result becomes `{ 1: 1, 2: 4, 3: 9 }`

// 4️⃣ **Print the Result:**  
//    - Print the final object containing numbers and their squares.

// 🚀 **JavaScript Implementation:**
function createSquareObject(n) {
    const result = {}; // Step 1: Initialize an empty object
    
    for (let i = 1; i <= n; i++) {  // Step 2: Loop through numbers from 1 to n
        result[i] = i * i;  // Step 3: Calculate square and store in object
    }
    
    console.log("Result:", result);  // Step 4: Print the result
}

// 🔢 **Test Cases with Input and Output:**
createSquareObject(2); // Output: { 1: 1, 2: 4 }
createSquareObject(4); // Output: { 1: 1, 2: 4, 3: 9, 4: 16 }
createSquareObject(6); // Output: { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36 }

// 💡 **Why is this challenge useful?**
// - Enhances understanding of **for loops** and **object manipulation** in JavaScript.  
// - Useful for scenarios involving **data mapping** and **mathematical operations**.  
// - Great practice for **beginner-friendly coding challenges**.

// 🎯 Keep coding and keep improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more challenges. 🎉
