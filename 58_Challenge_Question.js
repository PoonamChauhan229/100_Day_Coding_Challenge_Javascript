function swapUsingDestructuring(a, b) {
  console.log("Before Swap: a =", a, ", b =", b);

  [a, b] = [b, a]; // Destructuring to swap values

  console.log("After Swap: a =", a, ", b =", b);
}

// Example usage
swapUsingDestructuring(5, 10);

//Write a JavaScript function that swaps the values of two variables using destructuring

// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉  
// It’s Day 58 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// Today’s challenge is about swapping the values of two variables using destructuring in JavaScript.

// 🔥 Problem Statement:
// Write a JavaScript function that swaps the values of two variables using destructuring assignment.  

// 📝 Input Example:
// Input: a = 5, b = 10  
// Output: a = 10, b = 5  

// 🚀 Approach:
// 1️⃣ Destructuring allows us to unpack values from arrays or objects into distinct variables.
// 2️⃣ To swap the values of two variables, we can use destructuring assignment:
    // const arr = [1, 2, 3];

    // // Destructure the array
    // const [a, b, c] = arr;

    // console.log(a); // Output: 1
    // console.log(b); // Output: 2
    // console.log(c); // Output: 3

// 3️⃣ Then, use destructuring to reassign: [a, b] = [b, a].  
// 4️⃣ This efficiently swaps the values without needing a temporary variable.

// 🛠️ Code Implementation:
function swapValues(a, b) {;
  console.log(`Before Swap: a = ${a}, b = ${b}`);

  // Step 1: Use destructuring to swap the values
  [a, b] = [b, a];

  console.log(`After Swap: a = ${a}, b = ${b}`);
  return [a, b]; // Returning swapped values for further use if needed
}

// 🔍 Example Usage:
const initialA = 5, initialB = 10;
console.log(`Input: a = ${initialA}, b = ${initialB}`);
const [swappedA, swappedB] = swapValues(initialA, initialB);
console.log(`Output: a = ${swappedA}, b = ${swappedB}`);

// 🎉 Explanation of Output:
// For the input a = 5 and b = 10:
// - Destructuring swaps the values: a becomes 10, b becomes 5.
// - The function prints both the "before" and "after" states.

// 🌟 Why is this challenge important?
// - Destructuring is a modern and concise feature in JavaScript, widely used in ES6+.
// - It improves code readability and avoids the need for temporary variables during swaps.

// 💡 Tip of the Day:
// Explore other applications of destructuring, like unpacking arrays, nested objects, and swapping multiple values!

// 🚀 That’s it for today! Keep learning and coding. See you tomorrow for Day 59 Challenge!  
