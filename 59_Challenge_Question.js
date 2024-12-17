// Write a JavaScript function that swaps the values of two variables using a temporary variable.

// 📝 Input Example:
// Input: a = 3, b = 7  
// Output: a = 7, b = 3

// JS Function                      >> swapValues()
// swaps the values of two variables
// using a temporary variable.      >> let temp;


//Approach:
// Input: a = 3, b = 7  
// let temp;
// temp=a // temp=3
// a=b //a=7
// b=temp // b=3
// a=7 || b=3


function swapValues(a,b){//params
    console.log(`Before swap a = ${a} and b = ${b}`);
    let temp;
    temp=a;
    a=b;
    b=temp;
    console.log(`After swap a = ${a} and b = ${b}`)
}
swapValues(3,7)//args
swapValues(10,30)


