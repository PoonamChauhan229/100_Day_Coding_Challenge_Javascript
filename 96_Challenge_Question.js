// 🎉 Welcome to Day 96 of the 100 Days of JavaScript Coding Challenge! 🚀

// 🌟 **Today's challenge is about creating a class for user registration** that ensures unique usernames.  
// Let's break it down step by step!

// Write a class to manage user registration and ensure the unique validation of a username.

// class >>UserRegistration 
// handle user registration
// ensure the unique validation of a username

// Approach:
// we define a class named UserRegistration >>Class is a blueprint for creating objects.
// The `UserRegistration` class will manage user registration and enforce unique usernames
// class UserRegistration{} 

// Inside the class, we define properties and methods using constructor and methods
// constructor(){
// To this we are not going pass any parameter because we want that users are added dynamically when they register.
// this.users=[]  >> store registered users
// } 

// methods
// methods >> methods are functions that belong to the class and are used to perform actions on the object.

// register(username,password){ >>register a new user

// check whether the username already exists or not 
// if not exists >>add to users array
// if exists >> dont add to users array

// if condition
// some() >>a powerful array method that checks whether at least one element in an array meets a specified condition. It returns a boolean value

// Whether usename exists
// if (this.users.some(user => user.username === username)) {
    // Print >>Username already exists. Please choose a different username.
// }else{
    // if username doesnt exist then pls add to users array
    // push() >> its add element to end of the array
    // this.users.push({ username, password });
    // Print >>User registered successfully!
// }

// >>show all registered users
// showUsers(){
    // Print >>this.users
// } 

// Create an instance of the UserRegistration class
// let registrationSystem = new UserRegistration()

// Call the register method and pass in the username and password
// registrationSystem.register('oswald', '1234')
// registrationSystem.register('wini', '4567')
// registrationSystem.register('wini', '4567')
// registrationSystem.showUsers()

class UserRegistration {
    constructor() {
        this.users = []; // Initialize an empty array to store registered users
    }

    // Register a new user
    register(username, password) {
        // Check if the username already exists
        if (this.users.some(user => user.username === username)) {
            console.log('Username already exists. Please choose a different username.');
        } else {
            // Add the new user to the users list
            this.users.push({ username, password });
            console.log('User registered successfully!')
        }
    }

    // Show all registered users (for demonstration purposes)
    showUsers() {
        console.log(`Regustered users: ${this.users}`);
    }
}

// Example usage
let registrationSystem = new UserRegistration();
registrationSystem.register('oswald', '1234'); // Output: User registered successfully!
registrationSystem.register('wini', '4567'); // Output: User registered successfully!
registrationSystem.register('wini', '4567'); // Output: Username already exists. Please choose a different username.

registrationSystem.showUsers();


// 💡 **Why is this challenge important?**
// - Teaches how to work with **classes** in JavaScript to manage state and behavior.
// - Demonstrates how to use the **constructor** to initialize properties.
// - Shows how to enforce **uniqueness** in user data with array methods like `some()`.
// - Provides a foundation for building **user management systems** in larger projects.

// Thats all for today
// Dont forget to like share and subscribe to my channel for more exciting content!
// Keep Coding Keep Learning & Keep Growing
// I will see you tommroow with an another exciting challenge
// Thank you so much for watching
// Bye
