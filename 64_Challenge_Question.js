// Write a JavaScript function to find the first negative number in each subarray of size `k`.  

// 📝 Input Example:  
// Input: [1, -2, -3, -4, 5, 6, -7], k = 3  
// Output: [-2, -2, -3, -4, -7] 

//JS Function                    >>findFirstNegativeNum()
//find the first negative number in each subarray of size `k`.  

// Approach
//nested loop >> i loop >> j loop
//i loop >> 5 times >> 5 subarrays
// for(let i=0;i<=arr.length-k;i++)>>7-3=4 >>0-4 >> 5 times
//j loop 
// for(let j=i;j<i+k;j++) >>
//i=0 j=0 j<0+3=3 0-2 3times
//i=1 j=1 j<1+3=4 1-3 3times
//i=2 j=2 j<2+3=5 2-4 3times
//i=3 j=3 j<3+3=6 3-5 3times
//i=4 j=4 j<4+3=7 4-6 3times
//i=5 condition fail >> terminate

//check for 1st -ve Number
// result=[]
// if condition >> arr[j]<0 >> push Method >> break;

function findFirstNegativeNum(arr,k){
    let result=[]
   // console.log(arr,k)
 //nested loop
 for(let i=0;i<=arr.length-k;i++){
    for(let j=i;j<i+k;j++){
        // console.log(`i:${i},j:${j}`)
        if(arr[j]<0){
           // console.log(arr[j])
            result.push(arr[j]);
            break;
        }
    }
 }
 console.log(`First negative number in each subarray of size ${k}:`,result)
}
findFirstNegativeNum([1, -2, -3, -4, 5, 6, -7],3)
findFirstNegativeNum([-12,13,14,-16],3)
