// Write an Javascript Function to Rotate an array `k` times.

// For example:
// Input: `array = [1, 2, 3, 4, 5], rotations = 2` 
// Output: `[4, 5, 1, 2, 3]`

// Javascript Function      >> rotateArray()
// Rotate an array `k` times

//Approach
//rotations =>start =>1 and end =>2 =>for loop
//array = [1, 2, 3, 4, 5] =>1=>[5,1,2,3,4]
//        [5,1,2,3,4]     =>2=>[4,5,1,2,3]

//Remove the last element                    pop()
//insert the last element in the beginning   unshift()
// Repeat this process k times

function rotateArray(array,rotation){
   // console.log(array,rotation)

    for(let i=1;i<=rotation;i++){
       // console.log(i)
        const lastElement=array.pop()
      //  console.log(lastElement)
        array.unshift(lastElement)
    }
    console.log(`Rotated an array ${rotation} times:`,array)

}
rotateArray([1, 2, 3, 4, 5],2)
rotateArray([10,20,30,40,50,60],4)