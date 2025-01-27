// Hey everyone, welcome back to Code with Poonam.
// Its day 99 of the 100 Days of JavaScript Coding Challenge! 🚀

// 🌟 **Today's challenge is about creating a MathOperations class** that performs operations like square, cube, and factorial.  

// So lets proceed with the challenge! and we will move towards our VS code.

// Write a class called MathOperations with property number and method getSquare, getCube, and getFactorial to calculate and log the square, cube, and factorial of a  number.

// class              >>MathOperations()
// calculates and logs the square, cube, and factorial of a  number

// Approach:
//   1. Define a `MathOperations` class. >>Class is nothing but an blueprint of Object
// class MathOperations{}
//   2. Add a `constructor` to initialize the class with a number.
// constructor(number){
    // this.number=number
// }
//   3. Implement the `getSquare()` method to calculate the square of the number.
    // getSquare(){
    //     let square=this.number**2
    //     Print >> square
    // }
//   4. Implement the `getCube()` method to calculate the cube of the number.
    // getCube(){
    //     let cube=this.number**3
    //     Print >> cube
    // }
//   5. Implement the `getFactorial()` method to calculate the factorial of the number using a loop.
    // getFactorial(){
    //     let fact=1
    //     for(let i=1;i<=this.number;i++){
    //         fact=fact*i
    //     }
    //     Print >> fact
    // } 

class MathOperations {
    constructor(number) {
      this.number = number;
    }
  
    getSquare() {
      const square = this.number ** 2;
      console.log(`The square of ${this.number} is: ${square}`);
     
    }
  
    getCube() {
      const cube = this.number ** 3;
      console.log(`The cube of ${this.number} is: ${cube}`);

    }
  
    getFactorial() {     
      let fact = 1;
      for (let i = 1; i <= this.number; i++) {
        fact =fact* i;
      }
      console.log(`The factorial of ${this.number} is: ${fact}`);
   
    }
  }
  
  // Example usage:
  const math = new MathOperations(5);
  math.getSquare();      // The square of 5 is: 25
  math.getCube();        // The cube of 5 is: 125
  math.getFactorial();   // The factorial of 5 is: 120
  
  // 💡 **Why is this important?**
// - Teaches how to manage state within a class, such as using a number property to perform calculations.
// - Demonstrates how to implement methods that return computed results.
// - Shows how to work with loops to calculate the factorial.

