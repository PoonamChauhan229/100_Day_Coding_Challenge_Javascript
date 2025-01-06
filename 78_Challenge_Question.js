// 📌 **Hey Everyone 👋🏻 Welcome Back to Code with Poonam!**

// 🎯 **It's Day 77 of the 100 Days of Coding Challenge in JavaScript**

// ✅ **Today's Challenge: Check if Two Strings are Complementary**
// **Problem Statement:**
// Write a JavaScript function that checks if two strings together contain all 26 English letters exactly once.

// 📦 **Input Example:**
// 1️⃣ Input String1 = 'ABDCFGIJKLMNOPQUVWXYZ';
// 2️⃣ Input String2 = 'EHRST';
// ✅ Output: 'yes'

// Input String1 = 'AABBCC',
// Input String2 = 'DDEEFF',
// ❌ Output: 'no'

// 🛠️ **Approach:**
// We will solve this using **JavaScript string methods, Sets, and Regular Expressions (RegEx)**.  
// The goal is to determine whether two strings together contain all **26 English letters** exactly once.  

// 🎯 **Steps to Solve the Problem:**
// **Step 1: Combine the Strings**
// - Concatenate both strings into a single string for easy checking.  
// combinedStr = string1 + String2;

// **Step 2: Convert to Lowercase and Remove Duplicates**
// - Convert the combined string to lowercase using `.toLowerCase()` to handle case insensitivity.
// lowercaseStr = combinedStr.toLowerCase();  
// - Use a `Set` to store unique characters only, as a Set automatically filters out duplicates.  
//  uniqueChars = new Set(lowercaseStr); 

// **Step 3: Check for 26 Unique Letters** and also its should contain only a-z characters
//  Count the number of unique characters stored in the `Set`using size property.
// uniqueChars.size
// Regex  >>/^[a-z]+$/.test(lowercaseStr)

// - Regular expressions (RegEx) help in pattern matching and validation.  
// - Here, we use `/^[a-z]+$/` to ensure only lowercase English letters are present.  
// - **Breakdown of the RegEx:**  
//    - `^` → Start of the string.  
//    - `[a-z]+` → Match one or more lowercase letters (`a` to `z`).  
//    - `$` → End of the string.  
// - If the combined string has any non-alphabetic characters, it fails the RegEx test.  

// if (uniqueChars.size === 26 && /^[a-z]+$/.test(lowercaseStr)) {
    //print yes
// } else {
//     print no
// }
// }

// 🚀 **JavaScript Implementation:**
function areComplementary(string1, string2){
    // Step 1: Combine the strings
    let combinedStr = string1 + string2;
    let lowercaseStr=combinedStr.toLowerCase()
    // Step 2: Convert to lowercase and create a Set for unique characters
    let uniqueChars = new Set(lowercaseStr);

    // Step 3: Check for 26 unique letters using Set size and RegEx
       if (uniqueChars.size === 26 && /^[a-z]+$/.test(lowercaseStr)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

// 📊 **Test Cases:**
areComplementary('ABDCFGIJKLMNOPQUVWXYZ', 'EHRST');   // ✅ Output: 'yes'
// areComplementary('ABCDEFGH', 'IJKLMNOPQRSTUVWXYZ');  // ✅ Output: 'yes'
// areComplementary('ABCDEFGHIJKLM', 'NOPQRSTUVWXY');  // ❌ Output: 'no'
// areComplementary('AABBCC', 'DDEEFF');               // ❌ Output: 'no'

// 💡 **Why is this challenge useful?**
// - Helps in understanding string manipulation, Sets, and the use of Regular Expressions in JavaScript.  
// - RegEx knowledge is crucial for validating patterns and filtering data effectively.  

// 🎉 **Don't forget to Like, Share, and Subscribe for more coding challenges!**
// 🚀 **Keep coding and pushing your limits! See you tomorrow with another challenge!**
