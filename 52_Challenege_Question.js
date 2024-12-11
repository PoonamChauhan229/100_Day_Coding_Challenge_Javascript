// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Write an JS to find the area of the equilateral triangle.

// Input Description:
// The side of an equilateral triangle is provided as the input.

// Output Description:
// Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

// Sample Input :
// 20
// Sample Output :
// 173.21


// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉

// It’s Day 52 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// Today’s problem is inspired by Guvi CodeKata and we’re exploring a geometric problem:
// Back in **Day 40**, we discussed Guvi’s **CodeKata** platform. It’s an excellent resource for tackling a variety of coding problems, from beginner to advanced. If you haven’t checked it out yet, it’s worth exploring!
//So do watch that day 40 challenge video and know the insights of Guvi CodeKata.

// Heres the Problem Statement 

// 🚀 Approach:
// 1. Define a function `areaOfEquilateralTriangle` that accepts the side length of the triangle as input.
// 2. Check if the side length is valid (greater than 0).
// 3. Use the formula: 1/4*(√3*a*a)
// 4. We are going to use Math Methods >> Math.sqrt() >> Math.pow()
// Math.sqrt()> Gives the square root of a number.  >>Math.sqrt(3)
// Math.pow() >> Returns the value of a raised to the power of b. >> Math.pow(side, 2) >> Math.pow(a,2)
// 4. Round the result to 2 decimal places using `.toFixed(2)`.
// 5. Return or log the result.

function areaOfEquilateralTriangle(side) {
    // 1/4*(√3*a*a)
    const findSqrt = Math.sqrt(3);
    const findPow = Math.pow(side, 2);
    
    const area = 1/4*(findSqrt*findPow);
    const areaRounded = area.toFixed(2);
    console.log(`Area of equilateral triangle with side ${side}: ${areaRounded}`);
   
}

// 🚀 Example Usage:
areaOfEquilateralTriangle(20); // Sample Input: 20, Output: 173.21


// 🔍 Explanation:
// - Use `Math.sqrt(3)` to calculate √3.
// - Use `Math.pow(side, 2)` to calculate the square of the side.
// - Apply the formula: We calculated the area of the equilateral triangle.
// - Round the result to 2 decimal places using `.toFixed(2)`.

// 🔑 Why is this challenge important?
// Calculating areas is a foundational concept in geometry and has applications in:
// - Graphics programming
// - Game development
// - Real-world engineering calculations

// 🎉 A Huge Shoutout to All of You!
// We’ve crossed **Day 52** and are making amazing progress. Let’s keep up the energy and dive into more exciting challenges as we move forward!  

// Don’t forget to like, share, and subscribe for more coding content. See you tomorrow for **Day 53**! 🚀
