// Write a JavaScript function that generates a Fibonacci sequence, starting from two given numbers, and outputs a specified number of terms

// JavaScript function               >>fibonacciCustom()
//that generates a Fibonacci sequence, 
//starting from two given numbers,   0 1
//outputs a specified number of terms   6  >> loop 

// 0   F
// 1   S   F
// 1   N   S  F
// 2       N  S  F 
// 3          N  S
// 5             N
// ...

function fibonacciCustom(start1,start2,no){
    let first=start1,second=start2,next;
    let series=[]
    //console.log(start1,start2,no)
    for(let i=1;i<=no;i++){
        // console.log(first)
        series.push(first)
        next=first+second
        first=second;
        second=next;
    }
    //Spread Opertor : ...
    console.log(`Fibonacci sequence, starting from two given numbers ${start1},${start2}:`,...series)

}
fibonacciCustom(0,1,6)//args
fibonacciCustom(2,5,5)
