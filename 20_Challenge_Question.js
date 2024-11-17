// Write a JavaScript function that generates a random number between two specified value, including the min and max value.

// JavaScript function                                             >>generateRandomNumberInRange()
// generates a random number between two specified value >> In range
// including the min and max value

// Math.random() >> 0(included) to 1(excluded) >> 0-0.9999 >>decimal value
// Math.random()*10 >>0-10_1 >> 0(included)-11(excluded) >> Math.floor() >>10.999 >>10 

// generates a random number between two specified value >> In range
// 5-15
// Math.random()*(max-min+1) >>0(included)-11(excluded)  >> 0-10.99999....
// Math.floor(Math.random()*(max-min+1))+min || 0-10 >>5-15

function generateRandomNumberInRange(minValue,maxValue){
   // console.log(minValue,maxValue)
    const randomDecimal=Math.random()*(maxValue-minValue+1)
    //console.log(randomDecimal)
    const randomInteger=Math.floor(randomDecimal)+minValue
    console.log(`Generates a random number between ${minValue}-${maxValue}, including the both:`,randomInteger)
}
generateRandomNumberInRange(5,15)//args
generateRandomNumberInRange(50,70)