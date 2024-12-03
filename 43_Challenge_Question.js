// Write a function to remove all occurrences of a given value from an array.

// Example:
// Input: [1, 2, 3, 4, 2, 2], target = 2
// Output: [1, 3, 4]

// JS function                                >>removeoccurrences()   
// remove all occurrences of a given value from an array

//Approach:
//filter() >>array method >>condition >>true values >>[]
//arr.filter((element)=>element !== target) >> true value >>[1, 3, 4]

function removeoccurrences(arr,target){
    //console.log(arr,target)

    const result=arr.filter((element)=>element !==target)
    console.log(`removed all occurrences of a given value - ${target} from an array - ${arr} :`,result)
   // console.log(arr)
}
removeoccurrences([1, 2, 3, 4, 2, 2],2)
removeoccurrences([10,20,30,20,20],20)