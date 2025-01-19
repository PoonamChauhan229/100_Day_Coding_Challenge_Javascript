// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 91 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today's challenge is to find the length of the longest string value in an object.

// 📝 **Problem Statement:**  
// Write a JavaScript function to calculate the length of the longest string value in an object.

// 📦 **Input:** { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }  
// 📦 **Output:** 10  

// 📦 **Input:** { x: 'elephant', y: 'giraffe', z: 'hippopotamus' }  
// 📦 **Output:** 12  

// 📦 **Input:** { m: 'short', n: 'tiny', o: 'lengthyword', p: 'word' }  
// 📦 **Output:** 11

// 🛠️ **Approach (Step-by-Step Explanation):**

// 1️⃣ **Extract Object Values:**  
//    - Use `Object.values()` to extract all values from the object.  
//    - **Definition:** `Object.values(obj)` returns an array of the object's values.  
//    - Example: `{ a: 'apple', b: 'banana' } -> ['apple', 'banana']`

// 2️⃣ **Filter String Values:**  
//    - Use `filter()` to retain only the string values.  
//    - **Definition:** The `filter()` method creates a new array with elements that pass the provided test function.  
//    - Example: `['apple', 'banana', 42].filter(element => typeof element === 'string') -> ['apple', 'banana']`

// 3️⃣ **Calculate String Lengths:**  
//    - Use `map()` to convert each string into its length.  
//    - **Definition:** The `map()` method creates a new array populated with the results of calling a provided function on every element in the array.  
//    - Example: `['apple', 'banana'].map(element => element.length) -> [5, 6]`

// 4️⃣ **Find the Maximum Length:**  
//    - Use `Math.max()` to find the longest string length.  
//    - **Definition:** `Math.max()` returns the largest number from the provided numbers or array. Use the spread operator (`...`) to pass an array as individual arguments.  
//    - Example: `Math.max(...[5, 6]) -> 6`

// 🚀 **JavaScript Implementation:**
function findLongestStringLength(obj) {
    // Step 1: Extract all values from the object
    const objValues = Object.values(obj);
    console.log("Object Values:", objValues);

    // Step 2: Filter only string values
    const stringValues = objValues.filter(value => typeof value === 'string');
    console.log("Filtered String Values:", stringValues);

    // Step 3: Map string values to their lengths
    const stringLengths = stringValues.map(str => str.length);
    console.log("String Lengths:", stringLengths);

    // Step 4: Find the maximum string length
    const longestLength = Math.max(...stringLengths);
    console.log("Longest String Length:", longestLength);
}

// 🔢 **Test Cases with Input and Output:**
findLongestStringLength({ a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' });  
// Output: 10

findLongestStringLength({ x: 'elephant', y: 'giraffe', z: 'hippopotamus' });  
// Output: 12

findLongestStringLength({ m: 'short', n: 'tiny', o: 'lengthyword', p: 'word' });  
// Output: 11

// 💡 **Why is this challenge useful?**
// - Improves understanding of **Object.values()**, **filter()**, **map()**, and **Math.max()**.  
// - Teaches how to manipulate and process **string data** in objects effectively.  
// - Helps with practical **data processing** and **interview preparation** scenarios.  

// 🎯 Keep coding and keep improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more daily challenges. 🎉
