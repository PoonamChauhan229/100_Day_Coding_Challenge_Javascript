// Write a JavaScript function to find all the factors of a given number.
// JavaScript function               >> findFactors()
// all the factors of a given number 
//>> for loop 1-number >> if condition >> % ==0

function findFactors(number){
    let factors=[]
    // console.log(number)
    for(let i=1;i<=number;i++){
        if(number%i==0){
            // console.log(i)
            // push
            factors.push(i)
        }
    }
    // Spread Operators ...
    console.log(`Factors of  ${number} -`,...factors)

    //join() >>
    console.log(`Factors of  ${number} -`,factors.join(" "))

    //join(", ")
    console.log(`Factors of  ${number} -`,factors.join(", "))
}
findFactors(12) // 12 ?
findFactors(6)
findFactors(2)
