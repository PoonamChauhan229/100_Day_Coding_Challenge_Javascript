
// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 92 of the 100 Days of JavaScript Coding Challenge!

// In Yestersdays Challenge , we have found the length of the longest string value in an object. and in todays challenge we have to find the longest string value in an object.

// 📝 **Problem Statement:**  
// Write a JavaScript function to find the longest string value in an object.

// 📦 **Input:** { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }  
// 📦 **Output:** grapefruit  
// / String Lengths: [ 5, 6, 4, 10 ]
// Longest String Length: 10

// 📦 **Input:** { x: 'elephant', y: 'giraffe', z: 'hippopotamus' }  
// 📦 **Output:** hippopotamus  
// String Lengths: [ 8, 7, 12 ]
// Longest String Length: 12

// 📦 **Input:** {a:75,b:"hair",c:"shoes",d:100} 
// 📦 **Output:** shoes
// String Lengths: [ 4,5]
// Longest String Length: 5

// JavaScript function                 >>findLongestString()
// Find the longest string value in an object.

// 🛠️ **Approach (Step-by-Step Explanation):**

// 1️⃣ **Extract Object Values:**  
//    - Use `Object.values()` to get all values from the object.  
//    - **Definition:** `Object.values(obj)` returns an array containing the values of an object's properties.  
//    - Example: `{ a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }   -> ['apple', 'banana','kiwi','grapefruit']`  >>objValues

// 2️⃣ **Filter String Values:**  
//    - Use `filter()` to retain only the string values.  
//    - **Definition:** The `filter()` method creates a new array with elements that satisfy a condition specified in the callback function.  
//    - Example: objValues.filter(element => typeof element === 'string') -> ['apple', 'banana','kiwi','grapefruit'] >>stringValues

// 3️⃣ **Map String Values to Their Lengths:**  
//    - Use `map()` to convert each string into its length.  
//    - **Definition:** The map() method transforms each element in an array using a callback function and returns a new array..  
//    - Example: stringValues.map(element => element.length) -> 
// [5, 6] >>stringLengths 

// 4️⃣ **Find the Longest Length:**  
//    - Use `Math.max()` to find the maximum value in the array of lengths.  
//    - **Definition:** `Math.max()` returns the largest number from the provided numbers or array. Use the spread operator (`...`) to pass an array as individual arguments.  
//    - Example: `Math.max(...stringLengths) -> 6`  

// 5️⃣ **Find the Longest String:**  
//    - Use `filter()` again to find the string whose length matches the longest length.  
//    - Example: stringValues.filter(str => str.length === 6) -> ['banana']`  

// 🚀 **JavaScript Implementation:**

function findLongestString(obj) {
    // Step 1: Extract all values from the object
    let objValues = Object.values(obj);
    console.log("Object Values:", objValues);

    // Step 2: Filter only string values
    let stringValues = objValues.filter(element => typeof element === "string");
    console.log("Filtered String Values:", stringValues);

    // Step 3: Map string values to their lengths
    let stringLength = stringValues.map(element => element.length);
    console.log("String Lengths:", stringLength);

    // Step 4: Find the longest length
    let longestLength = Math.max(...stringLength);
    console.log("Longest String Length:", longestLength);

    // Step 5: Find the longest string
    let longestString = stringValues.filter(element => element.length === longestLength);
    console.log("Longest String:", ...longestString);
}

// 🔢 **Test Cases with Input and Output:**
findLongestString({ a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' });  
// Output: grapefruit  

findLongestString({ x: 'elephant', y: 'giraffe', z: 'hippopotamus' });  
// Output: hippopotamus  

findLongestString({a:75,b:"hair",c:"shoes",d:100}) 

// 🛠️ **Detailed Explanation of Methods:**

// - **Object.values():** Extracts the values of an object into an array.  
//    Example: `{ a: 'apple', b: 'banana' } -> ['apple', 'banana']`  

// - **filter():** Filters elements of an array based on a condition.  
//    Example: `['apple', 42, 'banana'].filter(value => typeof value === 'string') -> ['apple', 'banana']`  

// - **map():** Maps each element of an array to a new value (in this case, the string lengths).  
//    Example: `['apple', 'banana'].map(str => str.length) -> [5, 6]`  

// - **Math.max():** Finds the maximum number in an array.  
//    Example: `Math.max(...[5, 6]) -> 6`  

// 💡 **Why is this challenge useful?**  
// - Enhances skills in **object manipulation**, **array methods**, and **problem-solving in JavaScript**.  
// - Useful for data processing tasks and interview preparation.  

// 🎯 Keep coding and improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more daily challenges. 🎉
