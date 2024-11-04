// Write a JavaScript function that prints numbers from 1 to 100. But for: 
// for loop

// Multiples of 3, print "Fizz" instead of the number. i%3==0 >>"Fizz"
// Multiples of 5, print "Buzz".                       i%5==0 >>"Buzz"
// For numbers which are multiples of both 3 and 5, print "FizzBuzz". 
// i%3==0 && i%5==0 >>"FizzBuzz"
// if else if else if else 

// 3 Fizz
// 5 Buzz
// 15 (3 ,5) >> FizzBuzz

function fizBuzz(){
    for(let i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }else if(i%5==0){
            console.log("Buzz")
        }else if(i%3==0){
            console.log("Fizz")
        }else{
            console.log(i)
        }
    }
}
fizBuzz()






