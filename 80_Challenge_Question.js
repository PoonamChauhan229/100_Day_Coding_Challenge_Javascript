// 📌 **Hey Everyone 👋🏻 Welcome Back to Code with Poonam!**

// 🎯 **It's Day 80 of the 100 Days of Coding Challenge in JavaScript**

// ✅ **Today's Challenge: Check if an Object Contains Only Numeric Values**

// 📝 **Problem Statement:**
// Write a JavaScript function that checks if all the values of an object are numeric values.

// 📦 **Input Example:**
// 1️⃣ Input: `{ a: 20, b: 30, c: 50 }`  
//    ✅ Output: `true`  
// 2️⃣ Input: `{ a: 20, b: "30", c: 50 }`  
//    ❌ Output: `false`  
// 3️⃣ Input: `{ a: 10, b: NaN, c: 40 }`  
//    ❌ Output: `false`

// 🛠️ **Approach:**
// To solve this challenge, we will use **Object.values(), a for...of loop, typeof operator, and isNaN()**.

// 🎯 **Step-by-Step Solution:**

// **Step 1: Extract Object Values**  
// Use `Object.values(obj)` to get all the values of the object as an array.  
//  `{ a: 20, b: 30, c: 50 }`, 
// `[20, 30, 50]`.  

// **Step 2: Iterate Through Values**  
// Use a `for...of` loop to iterate over the array of object values.  

// **Step 3: Check for Numeric Values**  
// Use the `typeof` operator to check if a value is of type `number`.
// typeof 20 >> "number"  
// Use `isNaN(value)` to exclude non-numeric numbers like `NaN`.  
// isNaN(20) >> false
// **Step 4: Return Result**  
// If any value fails the numeric check, return `false`.  
// Otherwise, return `true`.  

// 🚀 **JavaScript Implementation:**
function hasOnlyNumericValues(obj) {
    // Step 1: Iterate through the object's values
    console.log(Object.values(obj))
    for (const value of Object.values(obj)) {
        console.log(value)
        // Step 2: Check if the value is not a number
        if (typeof value !== 'number' || isNaN(value)) {
            console.log(false)// Return false if any value fails the check
        }
    }
    // Step 3: Return true if all values are numeric
   console.log(true)
}

// 📊 **Test Cases:**
const obj1 = { a: 20, b: 30, c: 50 };  // ✅ Output: true
const obj2 = { a: 20, b: "30", c: 50 }; // ❌ Output: false
const obj3 = { a: 10, b: NaN, c: 40 };  // ❌ Output: false

hasOnlyNumericValues(obj1); // true
hasOnlyNumericValues(obj2); // false
hasOnlyNumericValues(obj3); // false

// 💡 **Why is this challenge useful?**
// - It Enhances your understanding of **type checking** in JavaScript.  
// - and also it Helps to understand the **difference between NaN and numbers**.  
// - It is Essential for **data validation** when working with dynamic inputs.  

// 🎉 **Don't forget to Like, Share, and Subscribe for more coding challenges!**
// 🚀 **Keep coding and pushing your limits! See you tomorrow with another challenge!**

