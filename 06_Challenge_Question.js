// Write a JavaScript function that calculates the sum of all odd numbers in a given range.
// JavaScript function                    >>sumOddNumbersRange()
// sum of all odd numbers in a given range.
// start point 5
// end point   20
// for loop i=start point,i<=end point 
// test condition >> if >> i % 2 !==0 >> Odd num 


function sumOddNumbersRange(start,end){
    let sum=0;
    // console.log(start,end)
    for(let i=start;i<=end;i++){
        //console.log(i)
        if(i % 2 !==0){
            // console.log(i)
           // sum=sum+i
           sum+=i;
        }
    }
    console.log(`The sum of all odd numbers between ${start} and ${end} : `,sum)

}

sumOddNumbersRange(5,20)//args
sumOddNumbersRange(8,15)



