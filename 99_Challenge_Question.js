// class that implements getter and setter methods for the name property only
class Person {
    constructor(name) {
        this._name = name; // Private property with an underscore convention
    }

    // Getter method for name
    get name() {
        return this._name;
    }

    // Setter method for name
    set name(value) {
        if (value.trim() === '') {
            console.log('Name cannot be empty.');
        } else {
            this._name = value;
        }
    }
}

// Example usage
const person = new Person('John');
console.log(person.name); // Output: John

// Using setter to update name
person.name = 'Alice'; // Valid name update
console.log(person.name); // Output: Alice

// Using setter to enter an invalid value
person.name = ''; // Output: Name cannot be empty.
console.log(person.name); // Output: Alice (name remains unchanged)
