// 📌 **Hey Everyone 👋🏻 Welcome Back to Code with Poonam!**

// 🎯 **It's Day 81 of the 100 Days of Coding Challenge in JavaScript**

// ✅ **Today's Challenge: Merge Two Objects and Sum Values with the Same Keys**

// 📝 **Problem Statement:**  
// Write a JS Function to Merge  two objects where values with the same keys are added together  

// 📦 **Input Example:**  
// 1️⃣ Input:  
// `obj1 = { a: 1, b: 2, c: 3 }`  
// `obj2 = { a: 3, b: 4, d: 5 }`  
// ✅ Output: `{ a: 4, b: 6, c: 3, d: 5 }`  

// 🛠️ **Approach:**  
// To solve this, we will use **object spreading, a for...in loop, and conditional checking**.  

// 🎯 **Step-by-Step Explanation:**  

// **Step 1: Create a copy of the first object.**  
// Use the spread operator (`...`) to copy `obj1` into a new object called `result`.  
// result={...obj}

// **Step 2: Iterate over the second object.**  
// Use a `for...in` loop to iterate through each key in `obj2`.  
// for(const key in obj2){
    // Logic for Sum values if key exists; otherwise, add new key-value pair
    // result[key] = (result[key] || 0) + obj2[key];
    // }
    // 0 ? if key does not exits , then it would return NAN because we are adding 
// **Step 3: Check if the key exists in the result.**  
// If the key already exists, add its value to the existing value.  
// If it doesn’t exist, simply add the key-value pair to `result`. 

// Loop ends >> Print the merged result 

// **Step 4: Return the merged result.**  

// 🚀 **JavaScript Implementation:**
function mergeAndSum(obj1, obj2) {
    // Step 1: Copy obj1 into result using spread operator
    const result = { ...obj1 };
    console.log(result);

    // Step 2: Loop through obj2 and add values to result
    for (const key in obj2) {
        // Step 3: Sum values if key exists; otherwise, add new key-value pair
        result[key] = (result[key] || 0) + obj2[key];
      }

    // Step 4: Print the merged result
    console.log(result);
}

// 📊 **Test Cases:**
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 3, b: 4, d: 5 };

mergeAndSum(obj1, obj2);  // ✅ Output: { a: 4, b: 6, c: 3, d: 5 }

// 💡 **Why is this challenge useful?**
// - Enhances your understanding of object manipulation in JavaScript.  
// - Helps in learning how to handle dynamic key-value pairs.  
// - Great practice for working with loops and conditional statements.  

// 🎉 **Don't forget to Like, Share, and Subscribe for more coding challenges!**  
// 🚀 **Stay consistent and keep improving! See you tomorrow with another fun challenge!**  
