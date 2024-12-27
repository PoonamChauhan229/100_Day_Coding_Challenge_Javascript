// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 68 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about finding the maximum element in an array without using sorting! 🚀
// Let’s explore this simple yet powerful technique and shall move towards our Vs Code.🔍

// Write a JS Function to find the maximum element in an array without using sorting.

// 📝 **Input Example**: [3, 4, 9, 1, 6]
// 📝 **Output**: 9

// JS Function                 >>findMaxElement()
// maximum element in an array without using sorting


// 🛠️ **Approach**:


// Approach:
// loop >>We'll iterate through the array using a loop.
// - Assume and Initialize the `max` variable with the first element of the array.

// max=arr[0]
// i loop
// for(let i=1;i<arr.length;i++)
// - Compare each element with `max`. If an element is greater than `max`, update the `max` variable.
// condition arr[i]>max  >> true 
// update max variable >>max=arr[i]

// i=1 4>3 >> true >> max=4
// i=2 9>4 >> true >> max=9
// i=3 1>9 >> false >> max=9
// i=4 6>9 >> false >> max=9
// i=5 >>false >> terminate >> max=9 
// - Once the loop finishes, `max` will hold the largest element in the array.

// - We'll iterate through the array using a loop.
// - Assume and Initialize the `max` variable with the first element of the array.
// - Compare each element with `max`. If an element is greater than `max`, update the `max` variable.
// - Once the loop finishes, `max` will hold the largest element in the array.

// Let’s get started by writing the function `findMaxElement()` to solve this challenge!

function findMaxElement(arr) {
    // Initialize the maximum with the first element
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // Update max if the current element is greater
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // Output the result
    console.log(`Maximum element in the array [${arr}]:`, max);
}

// Example calls
findMaxElement([3, 4, 9, 1, 6]); // Output: 9

// 🚀 **Why is this challenge useful?**
// - It teaches us how to find the maximum element without sorting, which is faster and saves computational resources.
// - This technique is valuable in real-world applications, such as finding the highest score in a dataset or identifying the largest transaction in financial data.
// - It also Strengthens your understanding of iteration and comparison logic, which are fundamental in programming.

// And that’s all for today! 🎉 Try this challenge with different arrays and share your solutions in the comments! 📝

// Don’t forget to like, share, and subscribe to stay updated with more coding challenges. 🔔✨

// Keep coding, keep growing, and I’ll see you in the next video!
