// Day 35: Sort the Characters of a String Alphabetically
// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 35 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is about sorting characters in a string alphabetically. 💡
// This is a fun exercise to practice using arrays and string manipulation together.

// Challenge Overview:

// Write a JS Function to sort the characters in alphabetical order of a given string.

// Input:"javascript" 
// Output:"aacijprstv".

Approach:
// split("") >> without a space >> Convert the string into an array of characters using .split().
// sort() >> to arrange the characters alphabetically.
// join() >> Join the sorted array back into a string 

// Let’s solve this step by step! 🚀

function sortCharacters(str) {
    console.log("Original String:", str);

    // Step 1: Split the string and sort the characters
    const sortedStr = str.split("").sort().join("");
    console.log("Sorted String:", sortedStr);
}

// Example call to test the function:

sortCharacters("javascript"); // Expected output: "aacijprstv"

// Breakdown of the Example:

// The string "javascript" is split into ['j', 'a', 'v', ...].
// The array is sorted alphabetically to become ['a', 'a', 'c', ...].
// Joining the sorted characters results in "aacijprstv".

// Try this with different strings to see how the function works!
// Sorting characters is a simple yet useful operation in JavaScript.

// And that’s all for today! 🎉
// Don’t forget to like, share, and subscribe for more daily coding challenges.
// See you tomorrow for another exciting problem to solve! 🚀
