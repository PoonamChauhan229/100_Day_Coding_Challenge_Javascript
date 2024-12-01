// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 44 of our 100 Days of Coding Challenge in JavaScript! 💻

// Today, we’re solving a fun problem: Finding the Day of the Week from a Given Date! 📅

// 🎯 Challenge Overview:
// Write a function that takes a date and returns the corresponding day of the week (e.g., "Monday").

// Example:
// Input: "2024-12-01"
// Output: "Sunday"

// 🔑 Key Idea:
// JavaScript's `Date` object provides methods to extract the day of the week from a given date.
// The `getDay()` method returns a number from 0 to 6, where 0 is Sunday, 1 is Monday, and so on.

// Let’s dive into the code! 🚀

function findDayOfWeek(date) {
    // Create a new Date object from the given date string
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Use the getDay() method to get the day number (0-6)
    const dayNumber = new Date(date).getDay();
    
    // Return the corresponding day name
    console.log("The day of the week is:", dayNames[dayNumber]);
    return dayNames[dayNumber];
}

// Example Usage:
const inputDate = "2024-12-01";
findDayOfWeek(inputDate); // Output: "Sunday"

// Explanation:
// 1. The input date "2024-12-01" corresponds to a Sunday.
// 2. The getDay() method returns 0 for Sunday, which is mapped to the "Sunday" string in the `dayNames` array.

// 🔍 Why is this challenge important?
// Understanding how to work with dates is a key skill for building apps that require time-based logic or displaying schedules. 
// This type of problem is commonly asked in interviews and practical development tasks, such as building event calendars or reminders.

// 💡 Fun Fact:
// JavaScript's `Date` object is quite powerful, and `getDay()` is just one of the many methods that can help you manipulate and format dates easily!

// Try this function with your own dates to explore the days of the week! ✨

// That’s all for today! Don’t forget to like, share, and subscribe for more coding content. See you tomorrow with another exciting problem! 🚀
