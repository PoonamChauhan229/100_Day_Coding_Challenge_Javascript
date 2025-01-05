// Hey Everyone 👋🏻 Welcome Back to code with Poonam
// Its Day 77 of 100 Days of Coding Challenge in JavaScript

// Today’s challenge is to **Rearrange Vowels in a String**.  

// 📝 **Problem Statement**:  
// Write a JavaScript function that rearranges the vowels in a string in ascending order while keeping the consonants in their original positions.  

// 🧩 **Input Example**:  
// 1️⃣ Input: `"selva"` → Output: `"salve"`  
// 2️⃣ Input: `"ebcda"` → Output: `"abcde"`  

// 🛠️ **Approach**:  
// Use Loop +Array methods +String methods+Conditional Statements

// Create an array and store our Vowels
// vowels=[`a`, `e`, `i`, `o`, `u`]

// vowelist=[] >> To store vowels

// charlist=[] >> Initially >> store here null as per the length of string and then finally we will update the Final result using Array.fill() method
// charList = new Array(string.length).fill(null);
// charList=[null,null,null,null,null]

// Step1 :

// Loop through the string and check if the character is a vowel or not using include method
// If it is a vowel >> push it into the vowelist
// Else >> place it directly into the charlist at the same position

// for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) {
//         vowelList.push(string[i]); // Collect vowels
//     } else {
//         charList[i] = string[i];  // Place consonant directly
//     }
// }
// vowelList=[e,a]  >> sort() >> ["a","e"]
// charList=["s",null,"l","v",null]

Step2:
// Reinsert the sorted vowels back into the string while keeping consonants fixed. 
// vowelIndex =0 ;// move as per the length of vowelList and we will increment it
    // vowelIndex = 0;
// Loop >> start 0 end >> charList.length
// charList[i] === null >> if condition
// assign it to charList[i] >> vowelList[vowelIndex++]
    // for (let i = 0; i < charList.length; i++) {
    //     if (charList[i] === null) {
    //         charList[i] = vowelList[vowelIndex++];
    //     }
    // }
// 🚀 **JavaScript Implementation**:
function rearrangeVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']; // Vowel list
    let vowelList = [];                       // To store vowels
    let charList = new Array(string.length).fill(null); // Placeholder for final characters

    // Step 1: Separate vowels and consonants
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            vowelList.push(string[i]); // Collect vowels
        } else {
            charList[i] = string[i];  // Place consonant directly
        }
    }
    vowelList.sort();

    // Step 3: Insert sorted vowels back into the empty slots
    let vowelIndex = 0;
    for (let i = 0; i < charList.length; i++) {
        if (charList[i] === null) {
            charList[i] = vowelList[vowelIndex++];
        }
    }

    // Step 4: Return the rearranged string
    console.log(charList.join(""));
}

// 🔢 **Test Cases**:
rearrangeVowels("selva");   // Output: "salve"
rearrangeVowels("ebcda");   // Output: "abcde"
rearrangeVowels("hello");   // Output: "holle"
rearrangeVowels("aeiou");   // Output: "aeiou"

// 💡 **Why is this challenge useful?**  
// This challenge helps you practice working with string manipulation and array handling in JavaScript.  
// Mastering such techniques is essential for interview questions and algorithmic problem-solving.  

// Dont forget to like, share, and subscribe to my channel for more exciting content!
// 🎉 Keep coding and pushing your limits! See you tomorrow with an another challenge 🚀 
// Thank You! 
