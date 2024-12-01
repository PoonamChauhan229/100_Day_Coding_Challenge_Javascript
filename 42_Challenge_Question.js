// Write a JavaScript function to check if two arrays have the same elements regardless of order

// Example:
// - [1, 2, 3, 4] and [4, 3, 2, 1] → Arrays are equal.
// - [10, 20, 34] and [20, 10, 33] → Arrays are not equal as the elements differ.

// JavaScript function                               >>areArraysEqual()
// two arrays have the same elements regardless of order

//Approach:
//.length
// if(arr1.length!=arr2.length) >>Length Mismatch
// sort() >>ascending order >> sortedarr1 sortedarr2  >>[10, 20, 34] [10, 20, 33]
// for loop >> for(let i=0;i<sortedarr1.length;i++){}
//{} >> if(sortedarr1[i] != sortedarr2[i]) >>10 10 || 20 20 || 34 33 >>False

function areArraysEqual(arr1,arr2){
    //console.log(arr1,arr2)
    if(arr1.length != arr2.length){
        console.log("Length Mismatch")
        return;//early return
    }
    const sortedarr1=arr1.sort()
    const sortedarr2=arr2.sort()

   // console.log(sortedarr1,sortedarr2)
    for(let i=0;i<sortedarr1.length;i++){
     //   console.log(i,sortedarr1[i],sortedarr2[i])
        if(sortedarr1[i] !==sortedarr2[i]){
            console.log("Arrays are not equal as the elements differ.")
            return;
        }
    }
    console.log("Arrays are equal")
}
areArraysEqual([1, 2, 3, 4] , [4, 3, 2, 1])
areArraysEqual( [10, 20, 34] , [20, 10, 33])
areArraysEqual( [10, 20, 34,67,90] , [20, 10, 33])