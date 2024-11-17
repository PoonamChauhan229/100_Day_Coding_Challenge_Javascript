// Write a JavaScript function that calculates the sum of all elements in a given array of numbers.

// JavaScript function        >>sumArray()
// sum of all elements array

// [1,2,34,45]=1+2+34+45 >>82

// forloop >>  i=0;i<arr.length;i++ >> sum     
// reduce()>> array method >> (acc,num)=>{}

function sumArray(arr){
    //console.log(arr)
    let sum=0;
    for(let i=0;i<arr.length;i++){
        //console.log(i,arr[i])
        // sum=sum+arr[i]
        sum+=arr[i]
        //console.log(i,arr[i],sum)
    }
    console.log(sum)
}
sumArray([1,2,34,45])
console.log("-----------------------------")
function sumReduceArray(arr){
    console.log(arr)
    // element >> element 
    // acc >> accumulator >> sum|| addition
    let total=arr.reduce((acc,element)=>acc+element,0)
    console.log(total)
}
sumReduceArray([1,2,34,45])
