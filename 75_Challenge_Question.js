// Write a JavaScript function to find the sum of the squares of the first `N` natural numbers. 

// 🧩 **Input Example**:  
// 1️⃣ Input: 5  
// Output: 55 (i.e., 1² + 2² + 3² + 4² + 5² = 55)

// JS function                   >>sumOfSquares()
// sum of the squares of the first `N` natural numbers. 

// 5 ====>55
// 1*1+2*2+3*3+4*4+5*5
// 1+4+9+16+25 >>55

// Approach:
// Formula >> sum=n(n+1)(2n+1)/6 >>Substitute
// loops + Math.pow()
// let sum=0;
// loop >>i loop
// start >>1 || end >>n >>5
// for(let i=1;i<=n;i++){
// sum=sum+Math.pow(i,2)
// }
// Print  >>sum

function sumOfSquares(n){
  // console.log(n)
    let sum=0;
    let sumMath=0;
    let sumFor=n*(n+1)*(2*n+1)/6 

    for(let i=1;i<=n;i++){
//console.log(i)
        // without using Math.pow()
        sum+=i*i
        // with using Math.pow()
        sumMath+=Math.pow(i,2)
    }
     console.log(`Sum of the squares of the first ${n} natural numbers using multiplication:`,sum)  
     console.log(`Sum of the squares of the first ${n} natural numbers using Math.pow():`,sumMath)          
     console.log(`Sum of the squares of the first ${n} natural numbers using Mathematical Formula:`,sumFor)
}
sumOfSquares(5)
// sumOfSquares(7)
// sumOfSquares(10)





