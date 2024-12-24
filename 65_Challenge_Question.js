// Write a JavaScript function to find the first positive number in every subarray of size `k`. If no positive number exists in a subarray, return `0`.  

// 📝 Input: [1, -2, -3, -4, 5, 6, -7], k = 3
// 📝 Output: [1, 0, 5, 5, 5]

//JS Function                 >>findFirstPositiveNumber()        
//find the first positive number in every subarray of size `k`
//If no positive number exists in a subarray, return `0`.  

//Approach:
// 5 subarrays 
//nested loop >> i loop >> j loop
// i loop >> Outer loop
//for(let i=0;i<=arr.length-k;i++) ||7-3=4 >>0-4 >>5times
// j loop >> Inner loop
// for(j=i;j<i+k;j++)
// i=0 j=0 j<0+3=3 0-2 3times >> Subarray 
// i=1 j=1 j<1+3=4 1-3 3times >> Subarray
// i=2 j=2 j<2+3=5 2-4 3times
// i=3 j=3 j<3+3=6 3-5 3times
// i=4 j=4 j<4+3=7 4-6 3times
// i=5 fails terminate

// check for 1st +ve Number
// result=[]
// if condition >> arr[j]>0 >>pushMethod >>break;

// check for no +ve Number
// found=false
// arr[j]>0 >> true >> found=true >> push >> break
// arr[j]>0 >> false >>found=false >> push >> 0 

function findFirstPositiveNumber(arr,k){
    //console.log(arr,k)
    let result=[]
    // nested loop
   for(let i=0;i<=arr.length-k;i++){
    let found=false
      for(let j=i;j<i+k;j++){
        // console.log(`i:${i},j:${j}`)
        if(arr[j]>0){
           // console.log(arr[j]);
            result.push(arr[j])
            found=true;
            break;
        }              
    }
    if(!found){ //--!false >> true >> push 0
        result.push(0)
    }
   }
   console.log(`First positive number in every subarray of size ${k}:`,result)
}
findFirstPositiveNumber([1, -2, -3, -4, 5, 6, -7],3)
findFirstPositiveNumber([-13,-67,-89],2)