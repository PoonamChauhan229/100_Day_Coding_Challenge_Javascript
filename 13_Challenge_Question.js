// Write a JavaScript function that finds the reverse of a given number, If the number is negative, the reversed number should also be negative

// JavaScript function      >>reverseNumber()
// reverse of a given number
// number is negative,

// 345 || 543
// 12   ||21
// -12  ||-21

// reverse() >> Array Maethod  || join()
// split("") >> String Method
// toString()

// Math.sign() >> return the sign of that number
// 345  >>1
// -345 >>-1
// 0    >>0

function reverseNumber(number){
    //console.log(number)
    let numStr=number.toString()
    let revStr=numStr.split("").reverse().join("")
    //console.log(revStr)
    let revNum=parseInt(revStr) * Math.sign(number)
    console.log(`The reverse of a ${number}:`,revNum)


}
reverseNumber(345)
reverseNumber(-345)
