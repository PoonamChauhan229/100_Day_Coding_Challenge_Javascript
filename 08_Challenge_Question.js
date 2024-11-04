//Write a JavaScript function that calculates the factorial of any given number.
// JavaScript function          >>factorial()
// factorial of any given number >>
// 5
// 5*4*3*2*1
// 6
// 6*5*4*3*2*1
// for loop i=1;i<=n

function factorial(n){
    let result=1;
   // console.log(n)
    for(let i=1;i<=n;i++){
       // console.log(i)
       //result=result*i
       result*=i
    }
    console.log(`The factorial of ${n} : `,result)
}
factorial(5)//args
factorial(6)
//         5            1  
//  i ;  i<=n;  i++  result
//  1      T     2    1*1=1
//  2      T     3    1*2=2
//  3      T     4    2*3=6
//  4      T     5    6*4=24
//  5      T     6    24*5=120
//  6      F >>> terminate loop
// 120





