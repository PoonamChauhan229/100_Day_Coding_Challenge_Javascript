// Write a JavaScript function that calculates the sum of all even numbers from 1 to a specified limit.

// JavaScript function                               >> sumEvenNumbers()
//sum of all even numbers from 1 to a specified limit
// 1 to a number >> for loop >> i%2==0 >>if condition


function sumEvenNumbers(number){
    let sum=0;
    // console.log(number)
    for(let i=1;i<=number;i++){
       // console.log(i)
        if(i%2==0){
           // console.log(i);
            //sum=sum+i;
            sum+=i;// most prefer
        }
    }
    console.log(`Sum of all the even numbers from 1 to  ${number} is `,sum)
}
sumEvenNumbers(6)
sumEvenNumbers(45)
sumEvenNumbers(10)



