// 🎉 Welcome to Day 95 of the 100 Days of JavaScript Coding Challenge! 🚗

// 🌟 **Today's challenge is about creating a class for a Car** that has properties like `make`, `model` and methods like `start` and `stop`.  

// Write a Car Class with properties like make, model, and methods like start and stop.

// Let's break it down step by step!

// Class >> Car
// Properties >> make, model
// Methods >> start, stop

// Approach:
// we define a class named Car >>Class is a blueprint for creating objects.
// class Car {}

// Inside the class, we define properties and methods using constructor and methods
// constructor >> constructor is a special method that is called when a new object is created from the class.
// constructor(make, model) {
    // this keyword >> refers to the current instance of the class.
    // this.make = make; >> Assigns the make property to the value passed as an argument.
    // this.model = model; >> Assigns the model property to the value passed as an argument.
    // this.isRunning = false; >> Assigns the isRunning property to false.
// }

// methods >> methods are functions that belong to the class and are used to perform actions on the object.
// start() >> starts the car
// start(){
    // if condition >> if the car is already running >> print already running  with the make and model >>this.make and this.model
    // else >> if the car is not running >> start the car >> this.isRunning=true >> print started with the make and model>> this.make and this.model
// }
// stop() >> stops the car
// stop(){
    // if condition >> if the car is already stopped >> print already stopped with the make and model >>this.make and this.model
    // else >> if the car is not stopped >> stop the car >> this.isRunning=false >> print stopped with the make and model>> this.make and this.model
// }

// Also we can display the car Details
// getCarDetails() {
    // print the make and model>>this.make and this.model
// }

// Create an instance of the Car class by using new Keyword
// const myCar = new Car('Toyota', 'Corolla');

// Call the getCarDetails() method on the myCar object
// myCar.getCarDetails();

// Call the start() method on the myCar object
// myCar.start();

// Call the stop() method on the myCar object
// myCar.stop();


class Car {
    constructor(make, model) {
        // * - The `this` keyword refers to the current instance of the class (the car object).

        this.make = make;  // Car's make (e.g., Toyota, Ford)
        this.model = model; // Car's model (e.g., Corolla, Mustang)
        this.isRunning = false; // Tracks if the car is running
    }

    // Start the car
    start() {
        if (this.isRunning) {
            console.log(`${this.make} ${this.model} is already running.`);
        } else {
            this.isRunning = true;
            console.log(`${this.make} ${this.model} started.`);
        }
    }

    // Stop the car
    stop() {
        if (!this.isRunning) {
            console.log(`${this.make} ${this.model} is already stopped.`);
        } else {
            this.isRunning = false;
            console.log(`${this.make} ${this.model} stopped.`);
        }
    }

    // Display car details
    getCarDetails() {
        console.log(`${this.make} ${this.model}`); 
    }
}

// Example usage
const myCar = new Car('Suzuki', 'Swift');
myCar.getCarDetails(); // Output: Suzuki Swift
myCar.start(); // Output: Suzuki Swift started.
myCar.stop();  // Output: Suzuki Swift stopped.
myCar.stop();  // Output: Suzuki Swift is already stopped.

// 💡 **Why is this challenge important?**
// - Helps you understand **Object-Oriented Programming** (OOP) concepts like **classes**, **properties**, and **methods**.
// - Demonstrates how to **track object states** using properties (like `isRunning`).
// - Teaches how to use the **constructor** and **methods** to manipulate the object's behavior.
// 🎉 This challenge is a great start to learning object-oriented programming and organizing your code into reusable components!


// Thats all for today!
// Dont forget to subscribe and share the challenge with your friends.
// Stay tuned for the next challenge!
// Happy coding! and Have a great day! Thank you byebye 

