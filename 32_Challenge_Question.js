// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 32 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about counting uppercase and lowercase letters in a string. 💡 
// This is a simple yet important problem to practice string manipulation and regular expressions in JavaScript.

// Challenge Overview:
//  Write a Function to count the number of uppercase and lowercase letters of a given string.
 // For example, 
//  Input :"JavaScript"
// Output :{ uppercase: 2, lowercase: 8 }.

// Approach
// Use a regular expression to match uppercase letters and lowercase letters separately.
// The .match() method returns an array of matched letters, 
// Regex > UpperCase>> /[A-Z]/g || Lowercase /[a-z/g
// and we can calculate the length of each array to get the count.

// Let’s solve this step by step! 🚀

function countCase(str) { 
    console.log("Original String:", str);
    // Step 1: Match all uppercase letters using the regular expression [A-Z]
    const uppercaseCount = (str.match(/[A-Z]/g) || []).length;
    console.log("Uppercase Count:", uppercaseCount);
    
    // Step 2: Match all lowercase letters using the regular expression [a-z]
    const lowercaseCount = (str.match(/[a-z]/g) || []).length;
    console.log("Lowercase Count:", lowercaseCount);
    
    // Step 3: Return the counts as an object
    console.log( { uppercase: uppercaseCount, lowercase: lowercaseCount })
    }

   countCase("JavaScript"); // Expected output: { uppercase: 2, lowercase: 8 }
    
    // Breakdown of the Example: 
    // 1. For the string "JavaScript", there are 2 uppercase letters: 'J' and 'S'.
    // 2. There are 8 lowercase letters: 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p'. 
    // 3. The result is: { uppercase: 2, lowercase: 8 }.
    
    // Try this function with your own strings to see how it works! // This is a great challenge for practicing regular expressions and string manipulation in JavaScript.
    
    // And that’s all for today! 🎉 // Don’t forget to like, share, and subscribe for more daily coding challenges. // See you tomorrow for another exciting problem to solve! 🚀
   
    
    // That’s a wrap for today’s challenge! 🎉
    // I hope you had fun solving this problem with me! 🙌
    // If you enjoyed this challenge, don’t forget to like, share, and subscribe so you never miss out on more exciting coding adventures. 🚀
    // Keep practicing, keep coding, and I’ll see you tomorrow with another fresh and exciting problem to conquer! 💻🔥