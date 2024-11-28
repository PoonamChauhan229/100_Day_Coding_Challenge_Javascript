// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 41 of our 100 Days of Coding Challenge in JavaScript.

// 🌟 Today’s challenge is about converting **Roman numerals to integers**! 🚀
// Roman numerals can be tricky, but they follow specific rules, and once we understand them, it's easy to convert between Roman and integer forms.

// 🎯 Challenge Overview:
// Write a JavaScript function to convert a Roman numeral string into an integer. 
// For example:
// - "III" → 3
// - "IV" → 4
// - "IX" → 9
// - "LVIII" → 58
// - "MCMXCIV" → 1994

// 🛠️ Approach:
// 1. Create an object Roman numeral characters and their integer values.
// 2. Loop through the Roman numeral string and add/subtract the corresponding values based on the numeral rules.
// 3. If the current numeral is smaller than the next one, subtract it; otherwise, add it.

// Let’s solve this step by step! 🚀

function romanToInt(roman) {
    // Mapping of Roman numerals to integers
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let sum = 0;
  
    // Loop through the Roman numeral string
    for (let i = 0; i < roman.length; i++) {
      const current = romanMap[roman[i]]; // Current character value
      const next = romanMap[roman[i + 1]]; // Next character value (for comparison)
  
      // If the current value is smaller than the next value, subtract it; otherwise, add it
      if (current < next) {
        sum -= current; // Subtract current value
      } else {
        sum += current; // Add current value
      }
    }
  
    // Return the final sum (converted integer)
    console.log(sum);
  }
  
  // Example usage:
 // Example usage
    romanToInt("III"); // Output: 3
    romanToInt("IV"); // Output: 4
    romanToInt("IX"); // Output: 9
    romanToInt("LVIII"); // Output: 58
    romanToInt("MCMXCIV"); // Output: 1994
  
  // Breakdown of the Example:
  // 1. "III" → 1 + 1 + 1 = 3
  // 2. "IV" → 5 - 1 = 4 (because 1 < 5)
  // 3. "IX" → 10 - 1 = 9 (because 1 < 10)
  // 4. "LVIII" → 50 + 5 + 1 + 1 + 1 = 58
  // 5. "MCMXCIV" → 1000 + 100 - 100 + 10 - 10 + 5 - 1 = 1994
  
  // ✨ Why this is an important problem:
  // Understanding Roman numerals and their conversion rules is a great exercise in working with strings, loops, and conditionals. It's also a classic interview problem!
  
  // 💡 What’s next?
  // Practice this problem further to ensure you understand the logic behind it. You can try solving it with different approaches like recursion or using regular expressions!
  
  // And that’s a wrap for today! 🎉
  // Don’t forget to like, share, and subscribe for more daily coding challenges!
  // See you tomorrow for another exciting problem to solve. 🚀
  
