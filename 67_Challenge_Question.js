// Hey everyone, welcome back to Code with Poonam! 🎉

// It's Day 67 of our 100 Days of Coding Challenge in JavaScript. 🚀

// Today’s challenge: Find the minimum element in an array without using sorting. 

// This challenge helps us practice finding the smallest number efficiently by iterating through the array.

// Let's dive into the challenge and see how we can solve it!

// 📝 **Problem Approach**:
// To solve this challenge, we need to iterate through the entire array and keep track of the smallest element.
// 1️⃣ Start by assuming the first element is the minimum.
// min=arr[0]
// 2️⃣ Iterate through the array from the second element onward.
// for(let i=1;i<arr.length;i++)
// condition >> arr[i] < min
// 3️⃣ If any element is smaller than the current minimum, update the minimum.
// min=arr[i]
// 4️⃣ Finally, after iterating through the entire array, the minimum element will be stored in the `min` variable.


// 🛠️ **Code Implementation:**

function findMinElement(arr) {
    let min = arr[0]; // Start by assuming the first element is the minimum

    // Iterate through the array to find the minimum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) { // If a smaller element is found, update the min
            min = arr[i];
        }
    }

    // Output the result
    console.log(`Minimum Element in [${arr}]:`, min);
}

// Example test case
findMinElement([3, 4, 9, 1, 6]);
// Expected output: 1

// 🚀 **Why is this challenge useful?**
// This challenge helps you find the minimum element without sorting, saving time, and builds foundational problem-solving skills applicable in real-world scenarios like data processing. It also strengthens your understanding of iteration and comparison techniques.

// 🌟 And that’s it for today’s challenge! 🎉
// Don’t forget to like, share, and subscribe! Stay tuned for tomorrow's coding challenge! 🌟✨

// Keep coding, keep learning, and I'll see you all in the next video! 
