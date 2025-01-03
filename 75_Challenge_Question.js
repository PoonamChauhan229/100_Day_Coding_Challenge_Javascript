// Hey everyone, welcome back to Code with Poonam.
// Its day 75 of the 100 Days of JavaScript coding challenge!

// Today's challenge is to **find the sum of squares of the first N natural numbers**. This is a great exercise to practice loops, mathematical operations, and working with numbers in JavaScript.

// 📝 **Problem Statement**:  
// Wite a JavaScript function to find the sum of the squares of the first `N` natural numbers. 

// 🧩 **Input Example**:  
// 1️⃣ Input: 5  
// Output: 55 (i.e., 1² + 2² + 3² + 4² + 5² = 55)

// 🛠️ **Approach**: 

// Using a mathematical formula)**: 
// 1️⃣ Use the formula for the sum of squares of the first `n` natural numbers:  
// Sum = n(n + 1)(2n + 1) / 6  

// But we will go with a simple approach using loops and the `Math.pow()` function.

// 1️⃣ Initialize a variable `sum` to store the sum of squares.  
// 2️⃣ Loop through the numbers from 1 to `n`.  
// 3️⃣ For each number, calculate its square using `Math.pow()` and add it to `sum`.  
// 4️⃣ Print or return the final sum.  

// 🚀 **JavaScript Implementation**:
function sumOfSquares(n) {
    let sum = 0; // Initialize the sum variable
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, 2); // Add square of the current number to sum
    }
    console.log(`Sum of squares of the first ${n} natural numbers:`,sum); // Print the result
}

// 🔢 **Test Cases**:
sumOfSquares(5); // Output: 55 (1² + 2² + 3² + 4² + 5² = 55)
sumOfSquares(3); // Output: 14 (1² + 2² + 3² = 14)
sumOfSquares(7); // Output: 140 (1² + 2² + 3² + ... + 7² = 140)

// 💡 **Why is this challenge useful?**  
// This challenge helps you practice basic mathematical operations and improve your ability to use loops and work with numbers. It's a great exercise for mastering how to manipulate and calculate values programmatically.  

// That's all for today. 
// Dont forget to check out Code with Poonam on YouTube for more amazing coding challenges!
// Keep up the great work, and happy coding! 💻🚀
