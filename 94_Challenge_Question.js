// Create a simple class that represents a Car, with properties like make, model, and methods like start and stop.
class Car {
    constructor(make, model) {
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
        return `${this.make} ${this.model}`;
    }
}

// Example usage
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getCarDetails()); // Output: Toyota Corolla
myCar.start(); // Output: Toyota Corolla started.
myCar.stop();  // Output: Toyota Corolla stopped.
myCar.stop();  // Output: Toyota Corolla is already stopped.
