// Write a JavaScript function that takes n no of numbers as an input  and returns the maximum and minimum values from those numbers.

//JavaScript function                   >>minMaxNum()
//n no of numbers as an input           >> 45,89,34,98,35
//returns the maximum and minimum values

//Math.min() >>minimum value
//Math.max() >>maximum value

// Math.min(45,89,34,98,35) >>34
// Math.max(45,89,34,98,35) >>98

//rest parameter || rest operator
//...rest

// function f1(...rest){
// console.log(rest)// [45,89,34,98,35]
// console.log(...rest) 45,89,34,98,35//Spread Operatoer
// }
// f1(45,89,34,98,35)

function minMaxNum(...rest){// rest operator
  // console.log(rest)//[ 45, 89, 34, 98, 35 ]
   //console.log(...rest)// 45 89 34 98 35
   const min=Math.min(...rest) // Spread Operator
   console.log("Minimum:",min)
   const max=Math.max(...rest)// Spread Operator
   console.log("Maximum:",max)
}
minMaxNum(45,89,34,98,35,78,90,56,34,23,67,90,12,200)
minMaxNum(1,45,78)
