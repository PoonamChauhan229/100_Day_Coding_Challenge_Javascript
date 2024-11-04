// Write a JavaScript function that calculates the sum of the digits of a given number.

// JavaScript function                >>sumDigits()
// sum of the digits of a given number
// 345 >>3+4+5 >>12

// split("") >> string method >> return an array
// toString() >> convert into a string
// parseInt(digit) >> convert into a integer >> sumup || sum=0;

function sumDigits(number){
    //console.log(number)
    let digitsArray=number.toString().split("")
    //console.log(digitsArray)
    let sum=0;

    for(let i=0;i<digitsArray.length;i++){
       // console.log(i,digitsArray[i])
        //sum=sum+parseInt(digitsArray[i])
         sum+=parseInt(digitsArray[i])
    }
    console.log(`The sum of the digits of a ${number} is`,sum)

}
sumDigits(345)//args
sumDigits(789)


