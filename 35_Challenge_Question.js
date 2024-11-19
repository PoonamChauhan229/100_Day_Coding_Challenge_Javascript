Day 35: Sort the Characters of a String Alphabetically
// Hey everyone, welcome back to Code with Poonam! 🎉

This is Day 35 of our 100 Days of Coding Challenge in JavaScript.

Today’s challenge is about sorting characters in a string alphabetically. 💡
This is a fun exercise to practice using arrays and string manipulation together.

Challenge Overview:
Given a string, sort its characters in alphabetical order.
For example, "javascript" should become "aacijprstv".

Approach:

Convert the string into an array of characters using .split().
Use .sort() to arrange the characters alphabetically.
Join the sorted array back into a string using .join().
Let’s solve this step by step! 🚀

javascript
Copy code
function sortCharacters(str) {
    console.log("Original String:", str);

    // Step 1: Split the string and sort the characters
    const sortedStr = str.split("").sort().join("");
    console.log("Sorted String:", sortedStr);

    return sortedStr;
}

// Example call to test the function:
const input = "javascript";
console.log(sortCharacters(input)); // Expected output: "aacijprstv"
Breakdown of the Example:

The string "javascript" is split into ['j', 'a', 'v', ...].
The array is sorted alphabetically to become ['a', 'a', 'c', ...].
Joining the sorted characters results in "aacijprstv".
Try this with different strings to see how the function works!
Sorting characters is a simple yet useful operation in JavaScript.

And that’s all for today! 🎉
Don’t forget to like, share, and subscribe for more daily coding challenges.
See you tomorrow for another exciting problem to solve! 🚀
