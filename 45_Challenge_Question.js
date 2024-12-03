// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 45 of our 100 Days of Coding Challenge in JavaScript! 💻

// Today, we’re solving a useful and practical problem: Getting the Current Date and Time! ⏰

// 🎯 Challenge Overview:
// Write a function to return the current date and time in a readable format.

// Example Output:
// Date: 12/03/2024, Time: 2:30:00 PM

// JS Function :
// Current Date and Time in a Readable Format

// 🔑 Approach:
// We will use Javascript Date Object  allows you to work with dates and times
//  It provides methods for creating, manipulating, and formatting date and time values.
// So how can we do it , we will be using Date() constructor function
// And with the help of new keyword we can create the instance/object of the Date() construction function
// Using JavaScript's `Date` object Methods , will we be extracting  the current date and time and format them as well
// `toLocaleDateString()` : This method returns a string representation of the current date in the locale's date format.
// `toLocaleTimeString()`: This method returns a string representation of the current time in the locale's time format.

// Let’s dive into the code! 🚀

function getCurrentDateTime() {
    // Step 1: Create a new Date object
    const now = new Date();

    // Step 2: Extract and format the date and time
    const date = now.toLocaleDateString(); // Format: MM/DD/YYYY
    const time = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

    // Step 3: Return the formatted string
    return `Date: ${date}, Time: ${time}`;
}

// Example Usage:
console.log(getCurrentDateTime());
// Output: Date: 12/03/2024, Time: 2:30:00 PM (example, actual output depends on the current date and time)

// Explanation:
// 1. The `new Date()` object provides the current date and time.
// 2. `toLocaleDateString()` formats the date, and `toLocaleTimeString()` formats the time in a readable style.

// 🔍 Why is this challenge important?
// Displaying the current date and time is essential in real-world applications, such as showing timestamps, scheduling tasks, or logging events.

// 💡 Fun Fact:
// The `Date` object is one of the oldest and most widely used objects in JavaScript, yet it remains a powerful tool for time and date manipulation!

// That’s all for today! Don’t forget to like, share, and subscribe for more coding content. See you tomorrow with another exciting problem! 🚀
