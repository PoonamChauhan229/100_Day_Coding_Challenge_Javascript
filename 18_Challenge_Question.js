// Write a JavaScript function that generates a random number from 0 to a specified value, excluding the specified value.


// JavaScript function                                 >>generateRandomNumber()
// generates a random number from 0 to a specified value
// excluding the specified value


// Math.random() >> 0(included) to 1(excluded) >> 0 to 0.9999 >>decimal values
// Math.random() * specified value
// 0(included) to 10(excluded) >> 0 to 9.99999  >> decimal values

//Math.floor() >> rounds down the value >> Integer value
// 9.5   >> 9
// 9.2   >>9
// 9.9   >>9

function generateRandomNumber(maxValue){//params
   // console.log(maxValue)
    const randomDecimal=Math.random()*maxValue
   // console.log(randomDecimal)
    const randomInteger=Math.floor(randomDecimal)
    console.log(`Generates a random number from 0 to a ${maxValue}, excluding the ${maxValue} : `,randomInteger)

}
generateRandomNumber(10)//args
generateRandomNumber(15)
