// Write a class called Student with a property marks and a method grade() to ensure the correct grading. 

// class >>Student
// property marks
// method grade() >> to ensure the correct grading

// Approach:
// class Student{}
// constructor(marks){
    // marks ? condition >>0-100
    // if(marks<0 || marks >100) >>print "Invalid Marks ... Enter Bet 0-100"
    // this.marks=marks
// }

// grade() 
// A+  >90 >>Excellent              this.marks>90 >>if
// A   >80 >>Great Job              this.marks>80 >>else if
// B   >70 >>Good                   this.marks>70 >>else if
// C   >60 >>Fair                   this.marks>60 >>else if
// D   >50 >>Needs Improvement      this.marks>50 >>else if
// Fail >>Fail >>Below Expectations   Else Part   >>else      
// if else if else

// Create an instance
// let student1=new Student(95)
// student1.grade()  >>A+  >90 >>Excellent

// let student2=new Student(40)
// student2.grade()  >>Fail >>Fail >>Below Expectations 

// let student3=new Student(110) >>Invalid Marks ... Enter Bet 0-100


class Student{
    constructor(marks){
        if(marks<0 || marks>100){
            console.log("Invalid Marks... Marks should be between 0 to 100")
        }
        this.marks=marks
    }

   grade(){
        if(this.marks>90){
            console.log("A+- Excellent")
        }else if(this.marks>80){
            console.log("A- Great Job")
        }else if(this.marks>70){
            console.log("B- Good")
        }else if(this.marks>60){
            console.log("C-Fair")
        }else if(this.marks>50){
            console.log("D-Needs Improvement")
        }else{
            console.log("Fail >>Below Expectations")
        }
   }
    
}

let student1=new Student(95)
student1.grade()

let student2=new Student(40)
student2.grade()

let student3=new Student(110)
















