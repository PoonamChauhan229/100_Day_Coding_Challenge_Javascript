// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 36 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is about counting vowels and consonants in a string. 💡
// It’s a fun way to practice string manipulation and regular expressions!

// 🎯 Challenge Overview:
// Write a JS Function to count the number of vowels and consonants.
// For example, 
// Input : "JavaScript", 
// Output :{ vowels: 3, consonants: 7 }.

// match() >>  is used to retrieve matches from a string based on a pattern and returns an array containing the results
// pattern >> /[aeiouAEIOU]/g
// .length
// str.length -vowels.length >> consonantsCount

// Let’s break this down step by step! 🚀

function countVowelsAndConsonants(str) {
    console.log("Input String:", str);

    // Step 1: Match all vowels using the regex [aeiouAEIOU]
    const vowelsCount = str.match(/[aeiouAEIOU]/g).length
    console.log("Vowels Count:", vowelsCount);

    // Step 2: Match all consonants using the regex [a-zA-Z] excluding vowels
    const consonantsCount = str.length - vowelsCount;
    console.log("Consonants Count:", consonantsCount);

    // Step 3: Return the counts as an object
    const result = { vowels: vowelsCount, consonants: consonantsCount };
    console.log("Result:", result);
}

// 🛠️ Example Usage:
countVowelsAndConsonants("JavaScript");
countVowelsAndConsonants("Function");

// 🔍 Breakdown of the Example:
// - For "JavaScript":
//   - Vowels: 'a', 'a', 'i' = 3.
//   - Consonants: 'J', 'v', 'S', 'c', 'r', 'p', 't' = 7.
// - Final Output: { vowels: 3, consonants: 7 }.

// Try it out with your own strings and share your results in the comments! 👇

// And that’s it for today, folks! 🎉
// If you enjoyed this challenge, smash that like button, share this video with your coder friends, and subscribe for more exciting coding problems!
// See you tomorrow for Day 37. 🚀
