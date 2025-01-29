// Write a class called MathOperations with property number and method getSquare, getCube, and getFactorial to calculate and log the square, cube, and factorial of a number.

// class called MathOperations 
// property number
// method getSquare, getCube, and getFactorial
// calculate and log the square, cube, and factorial of a number

// Approach:
// class MathOperations{}
// constructor(number){
    // this.number=number
// }

// methods
// getSquare(){
    //calculate the square
    // exponentiation operator >>
    // let square=this.number ** 2   || Math.pow(this.number,2)
    // Print sqaure >>output
// }

// getCube(){
    // calculate the cube
    // exponentiation operator >> 3
    // let cube=this.number ** 3  || Math.pow(this.number,3)
    // Print cube >>output 
// }

// getFactorial(){
    // 5 >>5*4*3*2*1 >>120
    // 3 >>3*2*1     >>6

    // let fact=1 >>Store our factorial >> Output
    //for loop
    // start >> 1 enspoint >>this.numner >>increment
    // for(let i=1;i<=this.number;i++){
        // calculate the factorial
        // fact=fact*i
    // }
    //Print fact >> Output
// }

// Iterations >>5
// i=1 fact=1 fact=fact*i >>fact
// i=1 >>fact*i >>1*1=1 >> fact=1
// i=2 >>fact*i >>1*2=2 >> fact=2
// i=3 >>fact*i >>2*3=6 >> fact=6
// i=4 >>fact*i >>6*4=24 >> fact=24
// i=5 >>fact*i >>24*5=120 >> fact=120
// i=6 >>6<=5 >>Fail >> Loop Terminate
// fact=120 >> Output

// Create an Instance >> new 
// let math=new MathOperations(5)
// math.getSquare() //5 >>25
// math.getCube() // 5 >>125
// math.getFactorial() // 5 >>120

class MathOperations{
    constructor(number){
        this.number=number
    }
   
    getSquare(){
        // let sqaure=this.number ** 2;
        let sqaure=Math.pow(this.number,2)
        console.log(`The square of ${this.number} : `,sqaure)
    }

    getCube(){
        // let cube=this.number ** 3;
        let cube=Math.pow(this.number,3)
        console.log(`The cube of ${this.number} : `,cube)
    }
    getFactorial(){
        let fact=1;
        for(let i=1;i<=this.number;i++){
            fact=fact*i
        }
        console.log(`The factorial of ${this.number} : `,fact)
    }

}

let math=new MathOperations(5)
math.getSquare()
math.getCube()
math.getFactorial()


let math1=new MathOperations(7)
math1.getSquare()
math1.getCube()
math1.getFactorial()
