// Write a function that checks if a given number lies between a specified lower and upper bound (inclusive).

// 💡 Example:
// Input: 5, Lower Bound: 1, Upper Bound: 10
// Output: "Yes, It lies within the range"

// Input: 15, Lower Bound: 1, Upper Bound: 10
// Output: "No, It does not lie within the range"

// JS Function                                         >>isWithInRange()
// Number || specified lower bound || specified upper bound
// given number lies between a specified lower and upper bound

//Approach:
//if else , >= , && ,<=
//number >=specified lower bound && number <= specified upper bound
//5>=1 && 5<=10   True && True >>Yes 
//15>=1 && 15<=10   True && False >>No 

function isWithInRange(number,lower,upper){
   // console.log(number,lower,upper) // 5 1 10
   if(number>=lower && number<=upper){
        console.log("Yes, It lies within the range")
   }else{
        console.log("No, It does not lie within the range")
   }

}
isWithInRange(5,1,10)
isWithInRange(15,1,10)
isWithInRange(50,40,60)