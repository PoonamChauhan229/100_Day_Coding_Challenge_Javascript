// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 88 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today's challenge is to find the sum of all numeric values in an object.

// 📝 **Problem Statement:**  
// Write a JavaScript function to calculate the sum of all numeric values in an object.

// 📦 **Input:** { a: 1, b: 2, c: 'text', d: 3 }  
// 📦 **Output:** 6  

// 📦 **Input:** { x: 10, y: 'hello', z: 5 }  
// 📦 **Output:** 15  

// 📦 **Input:** { m: 100, n: 200, o: 'JS', p: true }
// 📦 **Output:** 300

// 🛠️ **Approach (Step by Step Explanation):**

// 1️⃣ **Extract Values:**  
//    - Use `Object.values()` to get an array of all values in the object.  
  // { a: 1, b: 2, c: 'text', d: 3 }  
  // Object.values(obj) >> [1, 2, 'text', 3]

// 2️⃣ **Filter Numeric Values:**  
//    - Use `filter()` to keep only the numeric values.  

// ✅ **filter() Method Explanation:**  
// - The `filter()` method creates a new array with all elements that pass a test provided by a callback function.  
// **Syntax:** `array.filter(callbackFunction)`  
// **Example:** `[1, 'text', 3].filter(value => typeof value === 'number')`  
// **Output:** `[1, 3]`

// 3️⃣ **Calculate Sum:**  
//    - Use `reduce()` to calculate the sum of the numeric values.  

// ✅ **reduce() Method Explanation:**  
// - The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.  
// **Syntax:** `array.reduce((accumulator, currentValue) => { return accumulator + currentValue }, initialValue)`  
// **Example:** `[1, 3].reduce((acc, curr) => acc + curr, 0)`  
// **Output:** `4`

// 🚀 **JavaScript Implementation:**
function sumNumericValues(obj) {
  // Step 1: Extract all values
  const objValues = Object.values(obj);
  console.log("Object Values:", objValues);

  // Step 2: Filter numeric values using filter()
  const numericValues = objValues.filter(value => typeof value === "number");
  console.log("Filtered Numeric Values:", numericValues);

  // Step 3: Calculate the sum using reduce()
  const sum = numericValues.reduce((acc, curr) => acc + curr, 0);
  console.log("Sum of Numeric Values:", sum);

}

// 🔢 **Test Cases with Input and Output:**
 sumNumericValues({ a: 1, b: 2, c: 'text', d: 3 }) // Output: 6

const obj2 = { x: 10, y: 'hello', z: 5 };sumNumericValues({ x: 10, y: 'hello', z: 5 }) // Output: 15
 sumNumericValues({ m: 100, n: 200, o: 'JS', p: true });  // Output: 300

// 💡 **Why is this challenge useful?**
// - Enhances understanding of **Object.values()**, **filter()**, and **reduce()**.  
// - Useful for **data processing** and **object manipulation**.  
// - Great for **interview preparation** and **real-world applications**.  

// 🎯 Keep coding and keep improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more daily challenges. 🎉
