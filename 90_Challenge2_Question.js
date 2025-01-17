// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 90 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today's challenge is to find the sum of all odd numeric values in an object.

// 📝 **Problem Statement:**  
// Write a JavaScript function to calculate the sum of all odd numeric values in an object.

// 📦 **Input:** { a: 1, b: 2, c: 'text', d: 3, e: 8 }  
// 📦 **Output:** 4  

// 📦 **Input:** { x: 11, y: 'hello', z: 7, w: 4 }  
// 📦 **Output:** 18  

// 📦 **Input:** { m: 101, n: 200, o: 'JS', p: true, q: 9 }
// 📦 **Output:** 110

// 🛠️ **Approach (Step by Step Explanation):**

// 1️⃣ **Extract Values:**  
//    - Use `Object.values()` to get an array of all values in the object.  
//    Example: { a: 1, b: 2, c: 'text' } -> `[1, 2, 'text']`

// 2️⃣ **Filter Odd Numeric Values:**  
//    - Use `filter()` to keep only the odd numeric values.  

// ✅ **filter() Method Explanation:**  
// - The `filter()` method creates a new array with all elements that pass a test provided by a callback function.  
// **Example:** `[1, 2, 'text'].filter(value => typeof value === 'number' && value % 2 !== 0)`  
// **Output:** `[1]`

// 3️⃣ **Calculate Sum:**  
//    - Use `reduce()` to calculate the sum of the odd numeric values.  

// ✅ **reduce() Method Explanation:**  
// - The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.  
// **Example:** `[1, 3].reduce((acc, curr) => acc + curr, 0)`  
// **Output:** `4`

// 🚀 **JavaScript Implementation:**
function sumOddNumericValues(obj) {
  // Step 1: Extract all values
  const objValues = Object.values(obj);
  console.log("Object Values:", objValues);

  // Step 2: Filter odd numeric values
  const oddNumericValues = objValues.filter(value => typeof value === "number" && value % 2 !== 0);
  console.log("Filtered Odd Numeric Values:", oddNumericValues);

  // Step 3: Calculate the sum using reduce()
  const sum = oddNumericValues.reduce((acc, curr) => acc + curr, 0);
  console.log("Sum of Odd Numeric Values:", sum);
}

// 🔢 **Test Cases with Input and Output:**
sumOddNumericValues({ a: 1, b: 2, c: 'text', d: 3, e: 8 });  // Output: 4

const obj2 = { x: 11, y: 'hello', z: 7, w: 4 };
sumOddNumericValues(obj2);  // Output: 18

sumOddNumericValues({ m: 101, n: 200, o: 'JS', p: true, q: 9 });  // Output: 110

// 💡 **Why is this challenge useful?**
// - Develops skills in **object manipulation** and using **array methods** like **filter()** and **reduce()**.
// - Strengthens understanding of **number filtering** and **data aggregation**.
// - Excellent practice for **data processing** tasks and **interview preparation**.

// 🎯 Keep coding and keep improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more daily challenges. 🎉
