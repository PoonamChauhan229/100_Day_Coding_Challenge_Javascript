// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 88 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today’s challenge is to convert an array of objects into a single merged object.

// 📝 **Problem Statement:**  
// Write a JS function to convert an array of objects into a single merged object.

// 📦 **Input:** [{ a: 1 }, { b: 2 }, { c: 3 }]  
// 📦 **Output:** { a: 1, b: 2, c: 3 }

// 📦 **Input:** [{a: "apple"}, {b: "banana"}, {c: "apple"}, {d: "grape"}]  
// 📦 **Output:** { apple: 2, banana: 1, grape: 1 }

// 🛠️ **Approach (Step by Step Explanation):**

// 1️⃣ **Initialize an Empty Object:**  
//    - Create an empty object `result` to store merged data.
//  result={}

// 2️⃣ **Loop through the Array:**  
//    - Use a `for` loop to iterate through each object in the array.
//     Inside the loop, merge each object into the `result` object.
//    - For each object, loop through its properties.
//    for(let i=0;i<arr.length;i++){
//    Spread Operator >>Spreads all the properties of an obj
//      We are creating the shallow copy of the result object and upating it with the values of the current object.
//      and Finally our result object  will have the merged values of all the objects in the array.
//        result={...result, ...arr[i]}
// }

// 4️⃣ **Print the Result:**  
//    - Print the merged object.

// 🚀 **JavaScript Implementation:**
function mergeObjects(arr) {
    let result = {};
    
    for (let i = 0; i < arr.length; i++) {
        result = { ...result, ...arr[i] }; // Step 3:Creating a Shallow Copy and Merging objects
    }
    
    console.log("Merged Object:", result); // Step 4: Print the result
}

// 🔢 **Test Cases with Input and Output:**
mergeObjects([{ a: 1 }, { b: 2 }, { c: 3 }]);  
// Output: { a: 1, b: 2, c: 3 }

mergeObjects([{ a: "apple" }, { b: "banana" }, { c: "apple" }, { d: "grape" }]);  
// Output: { apple: 2, banana: 1, grape: 1 }

// 💡 **Why is this challenge useful?**
// - Improves understanding of **spread operator** and **object merging**.  
// - Useful for working with **data transformation** and **aggregating data**.  
// - Great for **interview practice** and **real-world coding tasks**.  

// 🎯 Keep coding and keep improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more challenges. 🎉
