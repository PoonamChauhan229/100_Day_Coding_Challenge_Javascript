// Write a function to check if a number lies strictly within a given range (excluding the boundaries).

// 💡 Example:
// Input: 11, Lower Bound: 10, Upper Bound: 20
// Output: "Yes, It lies strictly within the range"

// Input: 1, Lower Bound: 1, Upper Bound: 10
// Output: "No, It does not lie strictly within the range"

//JS Function                             >>isStrictlyWithinRange()
//number lies strictly within a given range

//Approach:
//Number || lower ||upper
//if else , >, <, &&
//number>lower && number<upper
//11>10 && 11<20  >>TRue && True >> True,Yes
//1>1   && 1<10   >>False && TRue >> Fale ,No

function isStrictlyWithinRange(number,lower,upper){
    //console.log(number,lower,upper)//11 10 20
    if(number>lower && number<upper){
        console.log("Yes, It lies strictly within the range")
    }else{
        console.log("No, It does not lie strictly within the range")
    }
}
isStrictlyWithinRange(11,10,20)//YES
isStrictlyWithinRange(10,10,20)//NO
isStrictlyWithinRange(20,10,20)//NO
isStrictlyWithinRange(5,10,20)//NO
isStrictlyWithinRange(1,1,10)//NO