// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 66 of our 100 Days of Coding Challenge in JavaScript.

// Today, we are tackling an interesting problem: finding the next smaller element for each element in the array! 🔍

// This problem is great for practicing loops and understanding the concept of comparing array elements.

// Let’s dive into the code and get started!

// 📝 Write a JavaScript function that, for each element in the array, prints the next smaller element. If no smaller element exists, print -1.
// INPUT: [10, 7, 9, 3, 2, 1, 15]
// OUTPUT: [7, 3, 3, 2, 1, -1, -1]


// Approach:

// We will use a **nested loop** to iterate through the array. For each element, 
// we’ll check the next smaller element by comparing it with subsequent elements.
// If we find one, we'll print it; otherwise, we print -1.

// Iteration:
// 1. Outer loop: Iterate through each element of the array.
// 2. Inner loop: Find the next smaller element by comparing the current element with subsequent elements.
// 3. Print the next smaller element or -1 if not found.
// i=0 j=1 || 7, 9, 3, 2, 1, 15 >>> 7
// i=1 j=2 || 9, 3, 2, 1, 15    >>> 3
// i=2 j=3 || 3, 2, 1, 15       >>> 3
// i=3 j=4 || 2, 1, 15          >>> 2  
// i=4 j=5 || 1, 15             >>> 1
// i=5 j=6 || 15                >>> -1
// i=6 fails >> terminate
 
function nextSmallerElement(arr) {
    let result = []; // Array to store the next smaller elements
    // Outer loop: iterate through each element of the array
    for (let i = 0; i < arr.length; i++) {
        let found = false; // Flag to check if we find a smaller element
        // Inner loop: find the next smaller element
        for (let j = i + 1; j < arr.length; j++) {
            console.log(`i:${i},j:${j}`);
            if (arr[j] < arr[i]) { // Compare the current element with the next elements
                result.push(arr[j]); // If smaller element found, push to result
                found = true; // Mark as found
                break;
            }
        }
        if (!found) { // If no smaller element is found, push -1
            result.push(-1);
        }
    }
    console.log("Next Smaller Element for each element:", result);
}

// Example calls to test the function
nextSmallerElement([10, 7, 9, 3, 2, 1, 15]);
// Expected output: [7, 3, 3, 2, 1, -1, -1]

// Another test case
// nextSmallerElement([4, 5, 2, 10, 8]);
// Expected output: [2, 2, -1, 8, -1]

// And that's a wrap for today's challenge! 🎉 This problem helps in understanding 
// how to compare elements within an array, a crucial skill for solving algorithmic problems.

// Don’t forget to like, share, and subscribe, and stay tuned for tomorrow’s coding challenge! 🌟✨

// Keep coding, keep learning, and I’ll see you all in the next video! 🚀
