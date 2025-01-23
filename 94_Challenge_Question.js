// Write a Person class with a name , age property and a greet method that prints the Necessary output
// Create a class called Person that has:
// A constructor accepting two parameters: name and age.
// A method greet that logs "Hello, my name is John and I am 25 years old.

// Approach:
// Syntax
// class ClassName{
    // constructor(param1,param2.....){
        // block of code
    // }

    // methods
    // method1(){
        // block of code
    // }

    // method2(){
        // block of code
    // }

// }

// Create an instance >> new keyword
// let testObj=new ClassName(1,2,....n)
// testObj.method1()
// testObj.method2()


// class >>Person
// constructor(name,age){
    // this keyword
    // this.name=name
    // this.age=age
// }

// greet(){
    // template literals
    // this.name || this.age
    // `Hello, my name is ${this.name} and I am ${this.age} years old`
// }

// Create an instance >> new
// let newPerson =new Person("John",25)
// newPerson.greet()

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        //console.log("Constructor Method")
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }
}

let newPerson=new Person("John",25)
// console.log(newPerson)
// console.log(newPerson.name)
// console.log(newPerson.age)
newPerson.greet()

let newPerson1=new Person("Code with Poonam",1)
// console.log(newPerson1)
// console.log(newPerson1.name,newPerson1.age)
newPerson1.greet()





























