// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 29 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is to **extract numbers from a string**! 🔢
// This is super useful when working with data that contains both text and numbers, like processing user inputs or cleaning up messy data.

// Here’s the Challenge:
// Write a function that takes a string as input and returns an array of all the numeric values present in the string.
// For example, if the input string is "Heo12345jkjk", the output will be [1, 2, 3, 4, 5].

// Let's break it down and solve this step by step! 🚀

function extractNumbers(str) {
    console.log("Input String:", str);

    // Step 1: Convert the string into an array of characters
    const charArray = str.split("");
    console.log("Array of Characters:", charArray);

    // Step 2: Use map() to convert each character to a number using parseInt
    // Any non-numeric characters will be converted to NaN
    const parsedNumbers = charArray.map((element) => parseInt(element));
    console.log("Numbers with NaN (if not numeric):", parsedNumbers);

    // Step 3: Filter out NaN values from the parsed numbers
    const filteredNumbers = parsedNumbers.filter((num) => !isNaN(num));
    console.log("Filtered Numbers:", filteredNumbers);
}

// Example call to see the function in action:
extractNumbers("Heo12345jkjk");

// Expected Output:
// Input String: Heo12345jkjk
// Array of Characters: [ 'H', 'e', 'o', '1', '2', '3', '4', '5', 'j', 'k', 'j', 'k' ]
// Numbers with NaN (if not numeric): [ NaN, NaN, NaN, 1, 2, 3, 4, 5, NaN, NaN, NaN, NaN ]
// Filtered Numbers: [ 1, 2, 3, 4, 5 ]

// Try this with different strings that include numbers, letters, or special characters!
// This is an excellent exercise to get comfortable with methods like map() and filter() in JavaScript.

// And that’s it for today’s challenge! 🎉 
// If you found this helpful, don’t forget to like, share, and subscribe to the channel for more daily coding content. 
// Keep coding, keep learning, and I’ll see you in the next video!
