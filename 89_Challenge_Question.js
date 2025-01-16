// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 89 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today's challenge is to find the sum of all even numeric values in an object.

// 📝 **Problem Statement:**  
// Write a JavaScript function to calculate the sum of all even numeric values in an object.

// 📦 **Input:** { a: 1, b: 2, c: 'text', d: 3, e: 8 }  
// 📦 **Output:** 10  

// 📦 **Input:** { x: 10, y: 'hello', z: 5, w: 4 }  
// 📦 **Output:** 14  

// 📦 **Input:** { m: 100, n: 200, o: 'JS', p: true, q: 6 }
// 📦 **Output:** 306

// 🛠️ **Approach (Step by Step Explanation):**

// 1️⃣ **Extract Values:**  
//    - Use `Object.values()` to get an array of all values in the object.  
//    { a: 1, b: 2, c: 'text', d: 3, e: 8 }  
//    Object.values(obj) >> [1, 2, 'text', 3, 8]

// 2️⃣ **Filter Even Numeric Values:**  
//    - Use `filter()` to keep only the even numeric values.  

// ✅ **filter() Method Explanation:**  
// - The `filter()` method creates a new array with all elements that pass a test provided by a callback function.  
// **Syntax:** `array.filter(callbackFunction)`  
// **Example:** `[1, 'text', 3, 8].filter(value => typeof value === 'number' && value % 2 === 0)`  
// **Output:** `[2, 8]`

// 3️⃣ **Calculate Sum:**  
//    - Use `reduce()` to calculate the sum of the even numeric values.  

// ✅ **reduce() Method Explanation:**  
// - The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.  
// **Syntax:** `array.reduce((accumulator, currentValue) => { return accumulator + currentValue }, initialValue)`  
// **Example:** `[2, 8].reduce((acc, curr) => acc + curr, 0)`  
// **Output:** `10`

// 🚀 **JavaScript Implementation:**
function sumEvenNumericValues(obj) {
  // Step 1: Extract all values
  const objValues = Object.values(obj);
  console.log("Object Values:", objValues);

  // Step 2: Filter even numeric values using filter()
  const evenNumericValues = objValues.filter(value => typeof value === "number" && value % 2 === 0);
  console.log("Filtered Even Numeric Values:", evenNumericValues);

  // Step 3: Calculate the sum using reduce()
  const sum = evenNumericValues.reduce((acc, curr) => acc + curr, 0);
  console.log("Sum of Even Numeric Values:", sum);

}

// 🔢 **Test Cases with Input and Output:**
sumEvenNumericValues({ a: 1, b: 2, c: 'text', d: 3, e: 8 }) // Output: 10

const obj2 = { x: 10, y: 'hello', z: 5, w: 4 };
sumEvenNumericValues(obj2) // Output: 14

sumEvenNumericValues({ m: 100, n: 200, o: 'JS', p: true, q: 6 });  // Output: 306

// 💡 **Why is this challenge useful?**
// - Improves skills in **object manipulation** and using **array methods** like **filter()** and **reduce()**.
// - Great practice for **data processing** and **aggregation** tasks in real-world applications.
// - Excellent for **interview preparation** involving data handling and manipulation challenges.

// 🎯 Keep coding and keep improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more daily challenges. 🎉
