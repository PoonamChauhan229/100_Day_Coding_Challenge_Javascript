// 📌 **Hey Everyone 👋🏻 Welcome Back to Code with Poonam!**
// It day 82 of our 100 Days of Coding Challenge in JavaScript!
// 🎯 Day 82: Remove Duplicate Values from an Object in JavaScript**

// 📝 **Problem Statement:**  
// Write a JavaScript function to remove duplicate values from an object.  

// 📦 **Input Example:**  
// `obj = { a: 1, b: 2, c: 1, d: 3, e: 2 }`  
// ✅ Output: `{ a: 1, b: 2, d: 3 }`  

// 🛠️ **Approach:**  
// To solve this, we will be using a Set Object*  
// - A `Set` is a special JavaScript object that stores **unique values only**.  
// - It automatically **removes duplicates**, which makes it perfect for this problem.  
// - Also JavaScript objects only ensure unique keys, not unique values. So, an extra object (or Set) is needed to keep track of values

// 1️⃣ **Create a Set:** Use a `Set` to keep track of unique values. 
// uniqueValues = new Set{}   >>Store unique values
// result = {}                >>Result object

// 2️⃣ **Loop through the object:** Use `Object.entries()` to extract key-value pairs.  
//   for (const [key, value] of Object.entries(obj)) {
// 3️⃣ **Check for Duplicates:** If the value is not already present in the `Set` (using `.has()`), add it and keep the key-value pair. 
    // Logic to check if value is already in the set
    // if its unqiue then add it to the set
    // add key-value pair to result
// }

// ✅ **Key Methods Used in Set:**  
// - `.add(value)` → Adds a value to the set. If the value already exists, it won't be added again.  
// - `.has(value)` → Checks if the value already exists in the set and returns `true` or `false`. 
// if (!uniqueValues.has(value)) { // Step 4: Check if value is already in the set
//     uniqueValues.add(value);  // Step 5: Add value to the set if unique
//     result[key] = value;      // Step 6: Add key-value pair to result
// }
 
// 4️⃣ console.log(result) >>Print the filtered object with no duplicates.  

// 🚀 **JavaScript Implementation:**
function removeDuplicates(obj) {
    const uniqueValues = new Set(); // Step 1: Store unique values
    const result = {};  // Step 2: Result object

    // Step 3: Iterate through object entries
    for (const [key, value] of Object.entries(obj)) {
        if (!uniqueValues.has(value)) { // Step 4: Check if value is already in the set
            uniqueValues.add(value);  // Step 5: Add value to the set if unique
            result[key] = value;      // Step 6: Add key-value pair to result
        }
    }

    console.log(result) // Step 7: Return filtered object
}
removeDuplicates({ a: 1, b: 2, c: 1, d: 3, e: 2 }); //{ a: 1, b: 2, d: 3 }

// 💡 **Explanation:**
// - The value `1` appears twice, so only the first occurrence (`a`) is kept.  
// - The value `2` appears twice, so only the first occurrence (`b`) is kept.  
// - The value `3` is unique, so it remains in the result.  

// 🎯 **Key Concepts Used:**  
// - `Set`: To ensure only unique values are stored.  
// - `.add()` and `.has()` methods of Set.  
// - `Object.entries()` for iterating key-value pairs.  

// ✅ **Why use a Set instead of an Array?**  
// - A `Set` is optimized for **unique value storage** and **faster lookups** compared to an array.  
// - Using an array would require extra work to filter duplicates manually.  

// 🎉 **Don't forget to Like, Share, and Subscribe for more coding challenges!**  
// 🚀 **Stay consistent and keep improving! See you tomorrow with another fun challenge!**  
