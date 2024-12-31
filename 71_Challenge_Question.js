// 📝 **Problem Statement**: 
// You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.

// Print 1 if array is majestic and 0 if it is not

// 🧩 **Input Examples**:  
// 1️⃣ Input: [1, 2, 3, 4, 6, 0, 0] → Output: 1   
// 2️⃣ Input: [1, 2, 3, 4, 5, 0, 0] → Output: 0   

// JS function         >>isMajestic()
// whether array is ‘majestic’ or not
// sum of first three number is equal to last three number.
// Print 1 if array is majestic and 0 if it is not

// [1, 2, 3, 4, 6, 0, 0]
// 1+2+3=6
// 6+0+0=6
// 6==6 >>True >>‘majestic’ Array >>1

// [1, 2, 3, 4, 5, 0, 0]
// 1+2+3=6
// 5+0+0=5
// 6==5 >> False >>Not ‘majestic’ Array >>0

// Approach:
// Sum,Compare,loops
// 2 loops
// i loop , j loop
// i loop >>calculate the sum of first three elements
// j loop >>calculate the sum of last three elements
// sumFirstThree=0
// sumLastThree=0

// for(let i=0;i<3;i++) >> 3 times >>0-2{
// calculate the sum of first three elements
    // sumFirstThree+=arr[i] ||sumFirstThree=sumFirstThree+arr[i]
// }

// [1, 2, 3, 4, 6, 0, 0] >>7-3=4  >> 4-6
// start >>arr.length-3 || end >>arr.length-1
// for(let j=arr.length-3;j<arr.length;j++){
// calculate the sum of last three elements
    //sumLastThree+=arr[j] ||sumLastThree=sumLastThree+arr[j]
// }


// Array >> Majestic Or Not
// Comparision Check
// sumFirstThree==sumLastThree 
// True >>Majestic >>1
// False >>Not Majestic >>0
// if condition >>if(sumFirstThree==sumLastThree){print 1}else{print 0}
// 1 ||0 

function isMajestic(arr){
    //console.log(arr)
     let sumFirstThree=0;
     let sumLastThree=0;
 
     for(let i=0;i<3;i++){
        // console.log(i)
         sumFirstThree+=arr[i]
     }
   //console.log("sumFirstThree:",sumFirstThree)
 
    for(j=arr.length-3;j<arr.length;j++){
    // console.log(j)
     sumLastThree+=arr[j]
    }
   // console.log("sumLastThree:",sumLastThree)
 
    if(sumFirstThree==sumLastThree){
     console.log(1)
    }else{
     console.log(0)
    }
    }
 isMajestic([1, 2, 3, 4, 6, 0, 0])//1
 isMajestic([1, 2, 3, 4, 5, 0, 0])//0
