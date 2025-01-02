// Hey everyone!
// Welcome back to Code with Poonam.
// Its Day 74 of our coding challenge. 
// Today Let’s dive into a another interesting challenge – **Finding the Common Keys and their Values in Two Objects**!  

// This problem will help you sharpen your skills with object manipulation and comparison in JavaScript. 🚀

// 📝 **Problem Statement**:  
//Write a Javascript Function to find the common keys and their values in two objects.

// 🧩 **Input Example**:  
// 1️⃣ Input:  
// const obj1 = { a: 1, b: 2, c: 3 };  
// const obj2 = { b: 2, c: 3, d: 4 };  
// Output: { b: 2, c: 3 }

// 🛠️ **Approach**:  
// 1️⃣ Loop through all the keys of the first object (`obj1`).  
// for in loop
// for (let key in obj1){}
// key >> a, b, c

// 2️⃣ For each key, check if it exists in the second object (`obj2`) and if the values are the same.  
// hasOwnProperty(key) >> returns true or false after checking if an object has a specific property
// compare obj1[key] === obj2[key] >> true or false

// if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]){}
// 3️⃣ If both conditions are true, add the key and its value to a new object.  
// const commonKeys = {};
// commonKeys[key] = obj1[key];

// 4️⃣ Return or print the new object containing all the common keys and their values.  

// 🚀 **JavaScript Implementation**:
function findCommonKeys(obj1, obj2) {
    const commonKeys = {}; // Object to store the common keys and their values
  
    // Iterate through all keys in obj1
    for (const key in obj1) {
      // Check if the key exists in obj2 and values are the same
      if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        commonKeys[key] = obj1[key]; // Add the common key-value pair to the new object
      }
    }
  
    console.log(commonKeys); // Print the object with common keys and values
}

// 🔢 **Test Cases**:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 3, d: 4 };
findCommonKeys(obj1, obj2); // Output: { b: 2, c: 3 }

// 💡 **Why is this challenge useful?**  
// Object manipulation is a fundamental skill in JavaScript. By solving this challenge, you’ll practice comparing object properties, working with loops, and using conditional statements effectively.  
// It’s a great exercise for improving your understanding of JavaScript objects!  
// Dont forget to subscribe to our channel for more coding challenges like this!
// 🎉 Keep coding, keep practising and keep growing , Thank You Bye Bye
