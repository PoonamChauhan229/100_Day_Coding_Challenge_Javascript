// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 47 of our 100 Days of Coding Challenge in JavaScript! 💻

// 🕵️ Today’s Challenge: Check if a Given Date is a Weekend Day

// Write a function that takes a date as input and determines if it falls on a weekend (Saturday or Sunday).

// 🎯 Challenge Overview:
// Input: "2024-12-01"  
// Output: "Its a Weekend day"  
// Input: "2024-12-03"  
// Output: "Its not a Weekend day"

// 🚀 Approach:
// We have to use here Date() Constructor Function
// 1. We will Convert the input string into a Date object using `new Date(date)`.
// 2. Extract the day of the week using the `getDay()` method of the Date object.
//    - This method returns an integer from 0 to 6 (0 = Sunday, 1 = Monday, ..., 6 = Saturday).
// 3. Check if the day is either `0` (Sunday) or `6` (Saturday).
// 4. we will using || operator to check if the day is either `0` (Sunday) or `6` (Saturday).
// 5.Inside if else statemnet will pass the condition
// Condition is true >> console.log("Its a Weekend day") >> else >> console.log("Its not a Weekend day")
// 6. console the appropriate message based on the day of the week.


// Let’s jump into the code! 🚀

function isWeekend(date) {
    const d = new Date(date); // Convert input to Date object
    const day = d.getDay();  // Get day of the week (0 for Sunday, 6 for Saturday)
    
    // Check if it's a weekend day
    if (day === 0 || day === 6) {
        console.log("Its a Weekend day");
    } else {
        console.log("Its not a Weekend day");
    }

    // Return true for weekend, false otherwise
    return day === 0 || day === 6;
}

// 🚀 Example Usage:
isWeekend('2024-12-01'); // Output: "Its a Weekend day" (Sunday)
isWeekend('2024-12-03'); // Output: "Its not a Weekend day" (Tuesday)

// 📝 Explanation:
// 1. The `getDay()` method returns the day of the week as a number (0 = Sunday, 6 = Saturday).
// 2. The function compares the day with `0` (Sunday) or `6` (Saturday).
// 3. If it matches, the function logs and returns that it’s a weekend day. Otherwise, it logs and returns that it’s not a weekend day.

// 🔍 Why is this challenge important?
// Working with days of the week is essential in applications like scheduling, event management, and calendars.

// 💡 Fun Fact:
// The `getDay()` method in JavaScript starts the week on Sunday (0) instead of Monday, unlike many other systems!

// That’s all for today! Don
