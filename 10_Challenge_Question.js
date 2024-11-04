//Write a JavaScript function that checks if a number is an Armstrong number.

// JavaScript function          >>isArmstrong()
// number is an Armstrong number

//153 >> Each digit raise to power of total no of digits > sum of up all the result 
// 1^3=1
// 5^3=125
// 3^3=27
// sum of up all the result ==original number >> Armstrong number

function isArmstrong(number){
    // console.log(number)
    // total no of digits >>String >>toString() >>  .length
    let numStr=number.toString()
    let numDigits=numStr.length
    // console.log(numDigits)
    let sum=0;

    for(let i=0;i<numDigits;i++){
        // console.log(i,numStr[i])
        let digit=parseInt(numStr[i])
        // console.log(digit)
        //Math Method
        //console.log(Math.pow(digit,numDigits))
        // sum=sum+Math.pow(digit,numDigits)
        sum+=Math.pow(digit,numDigits) // most prefer
    }
    // console.log(sum)
//checks if a number is an Armstrong number
// if condition
if(sum==number){
    console.log(`${number} is an Armstrong number`)
}else{
    console.log(`${number} is not an Armstrong number`)
}

}
isArmstrong(153)//args
isArmstrong(1634)
isArmstrong(45656)