// Write a function to find all the missing numbers in a given range [lower, upper] that are not present in the array.

// 💡 Example:
// Input: Array: [10, 12, 14, 15], Range: [10, 15]  
// Output: [11, 13]

// JS Function                       >>findMissingNumbers()
// missing numbers in a given range


//[10, 12, 14, 15] >>[11,13]

//Approach:
//[]>> store missing numbers
//for loop >>for (let i=lower;i<=upper;i++){//logic stmt}
//includes()>>boolean value >>true || false 
//if(!array.includes(i)){//push()}

function findMissingNumbers(array,lower,upper){
    // console.log(array,lower,upper)
    const missingNumbers=[]
    for(let i=lower;i<=upper;i++){
      if(!array.includes(i)){
        missingNumbers.push(i)
      }
    }
    console.log(`The missing numbers in a given range [${lower}, ${upper}] : `,missingNumbers)

}
findMissingNumbers([10, 12, 14, 15],10,15)
