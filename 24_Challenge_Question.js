// Write a JavaScript function that takes an array of numbers and returns the maximum and minimun number values

// JavaScript function                >>minMaxNum()
// takes an array of numbers          >>[1,23,45,90]
// maximum and minimun number values

// Math.min() >>minimum Value
// Math.max() >>maximum Value

//Math.min(1,23,45,90)  >>1
//Math.max(1,23,45,90)  >>90

//Spread Operator (...)
// Math.min(...arr)
// Math.max(...arr)

function minMaxNum(arr){
   //console.log(arr)
   const min=Math.min(...arr)  
   const max=Math.max(...arr)
   console.log("Minimum:",min)
   console.log("Maximum:",max)
   // console.log(Math.min(1,23,45,90))
}
minMaxNum([100,23,45,90])//args
minMaxNum([-3,20,78])







