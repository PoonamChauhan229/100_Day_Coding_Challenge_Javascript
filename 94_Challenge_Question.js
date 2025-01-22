// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 94 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today's challenge is all about **Classes in JavaScript**.  
// We will create a simple `Person` class to demonstrate how classes work and how to create and use instances.

// Write a Person class with a name , age property and a greet method that prints the Necessary output
// Create a class called Person that has:
// A constructor accepting two parameters: name and age.
// A method greet that logs "Hello, my name is [name] and I am [age] years old.".

// In JavaScript, a class is a blueprint for creating objects. It contains properties (data) and methods (functions) that define the behavior of objects created from the class.

// How do we write a class
// class ClassName{
//     constructor(param1,param2...){
         //constructor body
//     }
//     method1(){
           //method body
//     }
//     method2(){
            //method body
//     }}

// class Keyword: Used to define a class named Person.
// class Person{
// }
// constructor Method:
// A special method used to initialize an object created from the class.
// Accepts two parameters: name and age.

// The this keyword is used to assign the parameter values to the object's properties (this.name and this.age).
// In the context of a class, this refers to the instance of the class that is created using the new keyword.

// greet Method:
// A function defined inside the class to print a greeting message.
// Uses template literals (`...`) to embed the object's name and age into a string dynamically.

// Creating an Instance of the Person Class
// An instance is an object created from a class using the new keyword.

// new Keyword:
// Creates an object based on the Person class.
// Automatically calls the constructor method to initialize the object with the specified name ("John") and age (30).

// 3. Calling the greet Method
// Once the object is created, you can access its methods and properties using the dot . operator.
// Define the Person class

// Invokes the greet method on the person1 object.
// The method uses the this keyword to access the name and age properties of the person1 object and logs the greeting to the console.

// This output is generated because the values "John" and 30 are dynamically inserted into the template literal inside the greet method.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create an instance of Person
  const person1 = new Person("John", 30);
  console.log(person1)
  
  // Call the greet method
  person1.greet();

// 🛠️ **Why is this challenge useful?**
// - Helps you understand the basics of **Object-Oriented Programming (OOP)** in JavaScript.
// - Introduces you to **class syntax** for creating reusable blueprints for objects.
// - Demonstrates how to use methods and the `this` keyword to access object properties.

//  🎯 Practice by creating more methods and instances to have a better understanding on classes. Keep coding and improving your skills! 🚀

// That's all for Day 94. Don't forget to like, share, and subscribe to my channel for more exciting challenges
// I will see you in the next video, Thank you Bye Bye
  