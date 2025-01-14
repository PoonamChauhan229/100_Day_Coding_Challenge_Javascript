// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 86 of 100 Days of JavaScript Coding Challenge

// Wishing you a joyous Makar Sankranti, a cheerful Lohri, and a prosperous Pongal! 
// May these festivals bring happiness, prosperity, and new beginnings into your life.

// Today's challenge is all about transforming an object into an array of objects containing both key and value pairs.

// 📝 **Problem Statement:**  
// Write a function to return an array of objects containing both key and value pairs from an object.

// 📦 **Input:** { a: 1, b: 2, c: 3 }
// 📦 **Output:** [ { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } ]

// 📦 **Input:** { name: "John", age: 30, city: "New York" }
// 📦 **Output:** [ { key: 'name', value: 'John' }, { key: 'age', value: 30 }, { key: 'city', value: 'New York' } ]

// 📦 **Input:** {}
// 📦 **Output:** []

// 🛠️ **Approach (Step by Step Breakdown):**

// 1️⃣ **Convert Object to Entries:**
// - Use `Object.entries()` to transform the object into an array of `[key, value]` pairs.
// - Example: `obj = { a: 1, b: 2, c: 3 }`
//   - `Object.entries(obj)` → `[ ['a', 1], ['b', 2], ['c', 3] ]`

// 2️⃣ **Use Map to Transform:**
// - Use the `map()` method to iterate through each entry.
// - Transform each entry into an object with `key` and `value` properties.

// 3️⃣ **Implement Mapping in Two Ways:**
// - Without destructuring: Access values using array indices.
// result = objArr.map((element) => ({ key: element[0], value: element[1] }))

// - With destructuring: Use array destructuring for cleaner code.
// result1 = objArr.map(([key, value]) => ({ key, value }))

// 4️⃣ **Return Result:**
// - Print the array of transformed objects.

// 🚀 **JavaScript Implementation:**
function arrayOfObjects(obj) {
    // Step 1: Convert object to array of entries
    const objArr = Object.entries(obj);
    console.log("Entries:", objArr);

    // Step 2: Convert using map (without destructuring)
    const result = objArr.map((element) => ({
        key: element[0],
        value: element[1],
    }));
    console.log("Result without destructuring:", result);

    // Step 3: Convert using map (with destructuring)
    const result1 = objArr.map(([key, value]) => ({ key, value }));
    console.log("Result with destructuring:", result1);
}

// 🔢 **Test Cases with Input and Output:**
console.log("Test Case 1:");
arrayOfObjects({ a: 1, b: 2, c: 3 }); // Output: [ { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } ]

console.log("Test Case 2:");
arrayOfObjects({ name: "John", age: 30, city: "New York" }); // Output: [ { key: 'name', value: 'John' }, { key: 'age', value: 30 }, { key: 'city', value: 'New York' } ]

console.log("Test Case 3:");
arrayOfObjects({}); // Output: []

// 💡 **Why is this challenge useful?**
// - Enhances understanding of **Object.entries()**, **map()**, and **destructuring**.  
// - Useful for **data transformation** and **working with complex datasets**.  
// - Great practice for **functional programming** concepts.  

// That's all for today's challenge!
// Once again, wishing you a joyous Makar Sankranti, a cheerful Lohri, and a prosperous Pongal!
// Don't forget to like, subscribe, and hit the notification bell so you don't miss any of the future challenges.
// 🎯 Keep coding and keep improving your JavaScript skills! 🚀
// Thank you
