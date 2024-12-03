// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 46 of our 100 Days of Coding Challenge in JavaScript! 💻

// 🕵️ Today’s Challenge is all about to  Check if a Date is a Future Date
// So we have to determine thet date lies in the future if its compared to the current date.

// 🎯 Challenge Overview:
// Write a function that takes a date as input and returns true if it's in the future, otherwise false.

// Example:
// Input :2025-01-01` >> Output: true, Its an future date
// Input:'2024-12-01' >> Output: false, Its an past date

// 📝 Explanation:
// We will be using Date() constructor function to work with dates.
// new keyword is used to create a new instance of a Date object.

// 1. `new Date(date)` creates a Date object for the input date.
// 2. `new Date()` generates the current date and time.
console.log(new Date("2025-01-01"))
console.log(new Date())
// 3. The function takes a date as input and compares it with the current date.
// if else condition    
// 4. If the input date is greater than the current date, it returns true, indicating that it's a future date.
// 5. Otherwise, it returns false, indicating that it's a past date.


// Let’s jump into the code! 🚀

function isFutureDate(date) {
    // Compare the input date with the current date
    if(new Date(date) > new Date()){
        console.log("true, Its an future date") //future date
    }   
    else{
        console.log("false, Its an past date") //past date
    }   
  }
  
  // 🚀 Example Usage:
 isFutureDate('2025-01-01'); // Output: true (future date)
 isFutureDate('2024-12-01'); // Output: false (past date)
  

  
  // 🔍 Why is this challenge important?
  // Working with dates is a fundamental task in many applications, from scheduling systems to reminders and event planning.
  
  // 💡 Fun Fact:
  // JavaScript's `Date` object is highly versatile, allowing for easy comparisons, formatting, and calculations!
  
  // That’s all for today! Don’t forget to like, share, and subscribe for more coding content. See you tomorrow with another exciting problem! 🚀
  