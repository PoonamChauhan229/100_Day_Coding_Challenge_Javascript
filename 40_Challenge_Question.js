// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 40 of our 100 Days of Coding Challenge in JavaScript.

// 🌟 Before we dive into today’s challenge, let me show you something exciting!

// Today, I’m exploring **GUVI’s CodeKata**—an amazing platform to practice coding and improve problem-solving skills! 💻
// I’ll give you a quick walkthrough of GUVI’s site and the CodeKata page so you can see how easy and fun it is to practice coding there. 🌐

// - GUVI offers coding and upskilling courses in multiple languages, making tech learning accessible to everyone.
// - **CodeKata**, specifically, is their playground for coders like us. It has problems for every level, from beginners to advanced! 🚀



// Let’s check it out first, and then we’ll dive into today’s challenge!

// 🎯 Challenge Overview:
// Write a function to print the table of 9 up to a given number.
// For example:
// Input: `3`
// Output: `9 18 27`

// 🛠️ Approach:
// 1. Use an empty array to store the table values dynamically.
// 2. Use a loop to calculate the multiples of 9 up to the given limit.
// 3. Use the spread operator to convert the array into a single line of output.

// Let’s solve this step by step! 🚀

function printTableOfNine(limit) {
    console.log("Input Limit:", limit);

    // Step 1: Initialize an empty array
    const table = [];

    // Step 2: Generate the table using a loop
    for (let i = 1; i <= limit; i++) {
        table.push(9 * i); // Calculate and add each multiple of 9
    }

    // Step 3: Print the result using the spread operator
    console.log("Table of Nine:", ...table);
}

// Example Usage:
const input = 3; // Change this to test with other inputs
printTableOfNine(input); // Expected Output: 9 18 27

const input2 = 5;
printTableOfNine(input2); // Expected Output: 9 18 27 36 45

// 🔍 Example Breakdown:
// For the input `3`:
// - Iteration 1: Add `9` to the array → [9]
// - Iteration 2: Add `18` to the array → [9, 18]
// - Iteration 3: Add `27` to the array → [9, 18, 27]
// Final Output: `"9 18 27"`

// ✨ Why GUVI’s CodeKata?
// Practicing coding regularly is essential, and platforms like CodeKata make it enjoyable and structured. 
// Whether you’re learning to code or preparing for interviews, it has something for everyone!

// 💡 What’s next?
// Try solving this challenge directly on GUVI’s CodeKata and see how many problems you can crack today!
// I’ll leave the link to GUVI’s site and CodeKata page in the description below.

// And that’s a wrap for today! 🎉
// Don’t forget to like, share, and subscribe for more daily coding challenges!
// See you tomorrow for another exciting problem to solve. 🚀
