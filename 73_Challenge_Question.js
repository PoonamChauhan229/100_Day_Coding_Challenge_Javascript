// Hey Everyone Welcome back to Code with Poonam
// Happy New Year!  Guyz and Wishing you all a year full of learning, growth, and success!
//  It’s Day 73 of our 100 days of coding challlenge in Javascript 

// Let’s start the year with a challenge to find the **first non-repeating character** in a string.  
//  This challenge will help you practice string manipulation and improve your problem-solving skills in JavaScript! 🚀

// 📝 **Problem Statement**:  
// Write a JS Function to find first non repeating character in a string

// 🧩 **Input Example**:  
// 1️⃣ Input: "swiss" → Output: "w"  
// 2️⃣ Input: "aabbcc" → Output: null  
// 3️⃣ Input: "programming" → Output: "p"  

// 🛠️ **Approach**:  
// Loop >>i loop
// 1️⃣ Loop through each character in the string.  
//  for (let i = 0; i < str.length; i++) {}
// 2️⃣ For each character, check if it appears only once in the string
// store our character >>char
// char=str[i]
// (using `indexOf()` and `lastIndexOf()` methods).  
// indexOf() method returns the index of the first occurrence of a character in a string.
// lastIndexOf() method returns the index of the last occurrence of a character in a string.
// if (str.indexOf(char) === str.lastIndexOf(char)) >> True >>non repeating character
// 3️⃣ If the character appears only once, return it as the first non-repeating character.  
// 4️⃣ If no such character is found, return `null`.  

// 🚀 **JavaScript Implementation**:
function firstNonRepeating(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        // Check if the character is repeated or not
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            console.log(char); // First non-repeating character
            return; // Exit after finding the first non-repeating character
        }
    }
    console.log(null); // If no non-repeating character exists
}

// 🔢 **Test Cases**:
firstNonRepeating("swiss"); // Output: "w"
firstNonRepeating("aabbcc"); // Output: null
firstNonRepeating("programming"); // Output: "p"

// 💡 **Why is this challenge useful?**  
// Finding the **first non-repeating character** is a great exercise in string manipulation, which is an essential skill for developers.  
// This challenge will help you understand string traversal, comparison, and efficient searching techniques in JavaScript!  

// 🎆 **Wishing you a very Happy New Year!** May 2025 be filled with endless learning, exciting challenges, and lots of success! Keep coding and stay motivated!  
