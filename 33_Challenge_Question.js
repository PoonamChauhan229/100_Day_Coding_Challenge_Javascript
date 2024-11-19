
// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 33 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about counting the occurrences of a character in a string. 💡
// This is a great way to practice string manipulation techniques and the .split() method.

// Write a Function to count how many times the character appears in the string of a given string and a character,

// For example,
// input:"hello world"
// output:with the character 'o' should return 2.

Approach:
// Use the .split() method to divide the string by the target character.
//split("o")  >>["hell"," w","rld"]
// 3 > as a length
// The number of occurrences will be the number of resulting pieces minus 1.
// Subtract it with 1 
// the split creates a new part before the first occurrence and after the last occurrence of the character.
// The number of resulting parts (n) is always one greater than the number of occurrences of the character.


// Let’s solve this step by step! 🚀

function countOccurrences(str, char) {
    console.log("Original String:", str);
    console.log("Target Character:", char);

    // Step 1: Split the string by the target character
    const arr = str.split(char);
    console.log("Split Parts:", arr);

    // Step 2: Calculate occurrences
    const occurrences = arr.length - 1;
    console.log(`Number of Occurrences with character ${char}:`, occurrences);

}

countOccurrences("hello world", "o"); // Expected output: 2
countOccurrences("occurrences","c")
// Breakdown of the Example:

// The string "hello world" is split into ["hell", " w", "rld"] using the character 'o'.
// The length of the split parts is 3. Subtract 1 to get the occurrences: 3 - 1 = 2.
// The result is 2.

// Try this function with your own strings to see how it works!
// This challenge is a simple yet effective way to practice working with strings in JavaScript.

// And that’s all for today! 🎉
// I Believe this challenge was useful So
// Don’t forget to like, share, and subscribe for more daily coding challenges.
// See you tomorrow for another exciting problem to solve! 🚀