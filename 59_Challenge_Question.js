// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉  
// It’s Day 59 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// Today’s challenge focuses on swapping the values of two variables using a temporary variable.

// 🔥 Problem Statement:
// Write a JavaScript function that swaps the values of two variables using a temporary variable.

// 📝 Input Example:
// Input: a = 3, b = 7  
// Output: a = 7, b = 3  

// 🚀 Approach:
// 1️⃣ Declare a temporary variable
// let temp;
// Then this temporary variable will be used to store the value of the first variable during the swap.
// temp=a;  // temp=3
// 2️⃣ In first varable , Assign the value of the second variable.
// a=b;   // a=7
// 3️⃣ In second variable, Assign the value of the temporary variable.
// b=temp; // b=3
// 4️⃣ This ensures the values are swapped without overwriting
// a=7 b=3 >> Output
// 5️⃣ Finally, log the swapped values.


// 🛠️ Code Implementation:
function swapValues(a, b) {
    console.log("Before Swap: a =", a, ", b =", b);
    let temp;
    // Step 1: Use a temporary variable for the swap
    temp = a; // Store the value of 'a' in temp
    a = b;        // Assign 'b' to 'a'
    b = temp;     // Assign temp (original 'a') to 'b'

    console.log("After Swap: a =", a, ", b =", b);
}

// 🔍 Example Usage:
swapValues(3,7)

// 🎉 Explanation of Output:
// For the input a = 3 and b = 7:
// - 'temp' stores the value of 'a' (3).
// - 'a' is updated to the value of 'b' (7).
// - 'b' is updated to the value of 'temp' (3).
// Final result: a = 7, b = 3.

// 🌟 Why is this challenge important?
// - This traditional method introduces the concept of temporary variables, which are crucial in programming.
// - It’s useful in situations where modern ES6+ features like destructuring are not available.

// 💡 Tip of the Day:
// Always name your variables clearly, like using 'temp', to improve code readability and debugging!

// 🚀 That’s it for today! Keep learning and coding. 
// Don’t forget to like, share, and subscribe to my channel for more exciting content!
// See you tomorrow with a new coding challenge!
// Thank you everyone ... BYe Bye
