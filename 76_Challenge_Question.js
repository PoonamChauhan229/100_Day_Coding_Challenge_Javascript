// 🌟 **Welcome Back to Code with Poonam!** 🌟  

// Its day 76 of our 100 days of coding challenge in JavaScript, and we have got another exciting problem to solve together.

// Today’s challenge is to **convert an object into an array of keys and an array of values**.  

// 📝 **Problem Statement**:  
// Write a JavaScript function that takes an object and converts it into an array containing two subarrays:  
// - One for the keys.  
// - One for the values.  

// 🧩 **Input Example**:  
// 1️⃣ Input: `{a: 1, b: 2, c: 3}`  
// Output: `[["a", "b", "c"], [1, 2, 3]]`  

// 🛠️ **Approach**:  
// 1️⃣ Use `Object.keys()` to get the array of keys.  
// 2️⃣ Use `Object.values()` to get the array of values.  
// 3️⃣ Store both arrays in a single array.  
// 4️⃣ Return the result.  

// 🚀 **JavaScript Implementation**:
function convertObjectToArray(obj) {
    let keys = Object.keys(obj);      // Extract keys
    let values = Object.values(obj);  // Extract values
    let result = [keys, values];      // Store both in an array
    console.log(result);              // Print result
}

// 🔢 **Test Cases**:
convertObjectToArray({a: 1, b: 2, c: 3}); // Output: [["a", "b", "c"], [1, 2, 3]]
convertObjectToArray({x: 10, y: 20});      // Output: [["x", "y"], [10, 20]]
convertObjectToArray({name: "Poonam", age: 25}); // Output: [["name", "age"], ["Poonam", 25]]

// 💡 **Why is this challenge useful?**  
// This challenge helps you practice working with objects and arrays in JavaScript.  
// It's a fundamental skill useful for tasks like data transformation, API responses, and more!

// 🎯 **Bonus Tip:**  
// Try using `Object.entries()` if you want to convert the object into an array of key-value pairs.  

// 🎉 Keep learning and challenging yourself. See you in the next challenge! 🚀  
