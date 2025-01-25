// 🎉 Welcome to Day 97 of the 100 Days of JavaScript Coding Challenge! 🚀

// 🌟 **Today's challenge is about creating a class for Student grades** and determining whether they pass or fail based on their marks.  


// Write a class called Student with a property marks. 
// Add a method grade() that returns whether the student passed or failed based on the marks (e.g., pass if marks are above 50)


// Approach:
// class  >> Student
//  A class is a blueprint for creating objects in JavaScript. 
// In this case, Student represents a student with marks and a method for determining their grade.


// The constructor is a special method that is automatically called when you create a new instance of the class. It takes marks as a parameter, which represents the student's marks.
// constructor(marks){
    // marks outside the valid range (0-100)
    // if(marks<0 || marks>100){
         // Print >>'Invalid marks. Marks should be between 0 and 100.
    // }
    // this.marks=marks;
// }   

// methods >> grade()
//The method will determine the grade based on the marks property of the student.
// check marks >90 >>A+ (Excellent)
// check marks >80 >>A (Great job)
// check marks >70 >>B (Good)
// check marks >60 >>C (Fair)
// check marks >50 >>D (Needs Improvement)
// else >>Fail (Below expectations)
// if else if .....else

// We have created a Student class with a property marks and a method grade() that returns whether the student passed or failed based on the marks

// Now create an instance of the Student class and call the grade() method
// const student1 = new Student(95);
// student1.grade(); // Output: A+ (Excellent)

// const student2 = new Student(40);
// student2.grade(); // Output: Fail (Below expectations)

// const student3 = new Student(110); // This will throw an error


class Student {
    constructor(marks) {
      if (marks < 0 || marks > 100) {
        console.log('Invalid marks. Marks should be between 0 and 100.');
      }
      this.marks = marks;
    }
  
    grade() {
      if (this.marks > 90) {
        console.log('A+ (Excellent');

      } else if (this.marks > 80) {
        console.log('A (Great job');

      } else if (this.marks > 70) {
        console.log('B (Good');

      } else if (this.marks > 60) {
        console.log('C (Fair');

      } else if (this.marks > 50) {
        console.log('D (Needs Improvement');

      } else {
        console.log('Fail (Below expectations');
      }
    }
  }
  
  // Example usage

    const student1 = new Student(95);
    student1.grade(); // Output: A+ (Excellent)
  
    const student2 = new Student(40);
    student2.grade(); // Output: Fail (Below expectations)
  
    const student3 = new Student(110); // This will throw an error

// 💡 **Why is this challenge important?**
// - Teaches how to **validate** data in classes to ensure it meets specific criteria.
// - Demonstrates how to work with **class properties** and **methods** to build useful functionality.
// - Provides an opportunity to use **conditional statements** to determine results based on input values.
// - Teaches how to return a **message or grade** based on a student's performance, a common task in student management systems.

// Thats all for today!
// Dont forget to subscribe and share the challenge with your friends.
// Stay tuned for the next challenge!
// Happy coding! and Have a great day! Thank you byebye 
  