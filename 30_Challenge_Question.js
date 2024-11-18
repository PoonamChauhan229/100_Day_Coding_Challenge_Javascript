// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 30 of our 100 Days of Coding Challenge in JavaScript.

// Today, we’ll dive into **string manipulation** and we will check if a given string starts and ends with the same character
// This is a common operation in text processing or when validating patterns in strings.

// Lets proceed with todays challenge and open up our VS code.

// Challenge Overview:
// Write a function that checks if a given string starts and ends with the same character. 


// Let’s break this problem down step by step! 🚀
// Js Function >startsEndsSame
// given string starts and ends with the same character
// >> Compare the first and last characters of the string
//  str[0] === str[str.length - 1];
function startsEndsSame(str) {
    console.log("Input String:", str);

    // Step 1: Handle the edge case for empty strings
    if (str.length === 0) {
        console.log("The string is empty, so it cannot start and end with the same character.");
        return;
    }

    // Step 2: Compare the first and last characters of the string
    const result = str[0] === str[str.length - 1];
    console.log(result);

    // Step 3: Log a detailed result
    if (result) {
        console.log(`Yes, "${str}" starts and ends with the same character.`);
        console.log("--------------")
    } else {
        console.log(`No, "${str}" does not start and end with the same character.`);
        console.log("--------------")
    }
}

// Example calls to test our function:
startsEndsSame("radar"); // Expected output: true
startsEndsSame("hello"); // Expected output: false
startsEndsSame(""); // Expected output: false

// Let’s break down the expected results:
// 1. For "radar", the first and last characters are both 'r', so the output is true.
// 2. For "hello", the first character is 'h', and the last is 'o', so the output is false.
// 3. An empty string doesn’t have characters to compare, so we return false.

// Try testing this function with your own strings to see how it works!
// This challenge is a great way to practice working with strings and handling edge cases in JavaScript.

// That’s it for today’s challenge! 🎉 
// Don’t forget to like, share, and subscribe for more daily coding content.
// Keep coding, keep learning, and I’ll see you in the next video!
