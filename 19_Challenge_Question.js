// Write a JavaScript function that generates a random number from 0 to a specified value, including the specified value.

// JavaScript function                                  >>generateRandomNumber()
// generates a random number from 0 to a specified value
// including the specified value

// Math.random() >>0(included) to 1(excluded) >0-9.999999 >> decimal values
// Math.random() * specified value >> 0(included) to specified value(excluded)
// 10 >> 0(included) to 10(excluded)

// *** specified value>> 10 >> included  >> 10+1 >>11 0(included) to 11(excluded)
// 0 to 10.99999999999

// Integer 
// Math.floor() >> rounds down the value
//8.5 >>9

//down
// 8.5 >>8
// 8.6 >>8
// 8.1 >>8
// 8   >>8

function generateRandomNumber(maxValue){//params
    // console.log(maxValue)
    const randomDecimal=Math.random()*(maxValue+1)
    //console.log(randomDecimal)

    const randomInteger=Math.floor(randomDecimal)
    console.log(`Generates a random number from 0 to a ${maxValue}, including the ${maxValue}:`,randomInteger)

}
generateRandomNumber(10)//args
generateRandomNumber(15)




