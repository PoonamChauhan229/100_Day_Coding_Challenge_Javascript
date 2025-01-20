// Create a class to handle user registration and ensure the unique validation of a username.

class UserRegistration {
    constructor() {
        this.users = []; // Initialize an empty array to store registered users
    }

    // Register a new user
    register(username, password) {
        // Check if the username already exists
        if (this.users.some(user => user.username === username)) {
            return 'Username already exists. Please choose a different username.';
        } else {
            // Add the new user to the users list
            this.users.push({ username, password });
            return 'User registered successfully!';
        }
    }

    // Show all registered users (for demonstration purposes)
    showUsers() {
        return this.users;
    }
}

// Example usage
const registrationSystem = new UserRegistration();
console.log(registrationSystem.register('john_doe', 'password123')); // Output: User registered successfully!
console.log(registrationSystem.register('jane_doe', 'password456')); // Output: User registered successfully!
console.log(registrationSystem.register('john_doe', 'newpassword')); // Output: Username already exists. Please choose a different username.

console.log('Registered Users:', registrationSystem.showUsers());
