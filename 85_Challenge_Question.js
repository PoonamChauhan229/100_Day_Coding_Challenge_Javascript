// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// Its 🎯 Day 85 of 100 Days of JavaScript Coding Challenge

// Today’s challenge is to **Count How Many Times Each Value Appears in an Object**.

// 📝 **Problem Statement:**  
// Write a JavaScript function to count how many times each value appears in an object.

// 🔢 **Example:**
// Input: `{ a: 1, b: 2, c: 1, d: 3, e: 2 }`
// Output: `{ 1: 2, 2: 2, 3: 1 }`

// Input: `{ a: "apple", b: "banana", c: "apple", d: "grape" };
// Output: { apple: 2, banana: 1, grape: 1 }

// Input: `{ a: true, b: false, c: true, d: true }`;
// Output: { true: 3, false: 1 }

// 🛠️ **Approach:**  
// 2️⃣ **Initialize a Count Object:** Create an empty object to store the count of each value.

// 1️⃣ **Extract Values:** Use `Object.values()` to get all values from the object.  
// obj ={ a: 1, b: 2, c: 1, d: 3, e: 2 }
// Object.values(obj) >> [1,2,1,3,2]
  
// 3️⃣ **Loop through Values:** For each value, check if it already exists in the count object. If yes, increment the count, otherwise set it to `1`.  
// for of loop
// for(const value of Object.values(obj)){
    // Increment count || Initialize to 1
    // count[value] = (count[value] || 0) + 1
// }
// 4️⃣ **Print the Count Object:** Return the final count object with value frequencies.  

// 🚀 **JavaScript Implementation:**
function countValueOccurrences(obj) {
    const count = {};

    for (const value of Object.values(obj)) {
        count[value] = (count[value] || 0) + 1; // Increment count or initialize to 1    
    }
console.log(count)
}
 countValueOccurrences({ a: 1, b: 2, c: 1, d: 3, e: 2 })// { 1: 2, 2: 2, 3: 1 }

 countValueOccurrences({ a: "apple", b: "banana", c: "apple", d: "grape" })
// Output: { apple: 2, banana: 1, grape: 1 }

countValueOccurrences({ a: true, b: false, c: true, d: true })
// Output: { true: 3, false: 1 }

// 💡 **Why is this challenge useful?**
// - Enhances knowledge of **object manipulation** and **value counting**.  
// - Strengthens understanding of **loops** and **conditionals** in JavaScript.  
// - Useful for **data analysis**, **poll results**, and **survey data management**.  

// Dont  forget to like share and subscribe to my channel for more exciting content!
// 🎉 Keep practicing and leveling up your JavaScript skills!
// Happy coding!
