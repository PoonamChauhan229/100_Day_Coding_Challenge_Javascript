// Write a JavaScript function that merges two arrays, combining all their elements.

// JavaScript function                            >>mergeArrays()
// merges two arrays, combining all their elements

//Spread Operator >>(...)
// [1,2,3] & [89,67,56]
// [1,2,3,89,67,56]

// [...arr1,...arr2] >> new Array >> empty

function mergeArrays(arr1,arr2){//params
   // console.log(arr1,arr2)
    const merged=[...arr1,...arr2]
    console.log(`Merged Arrays:`,merged)

}
mergeArrays( [1,2,3],[89,67,56])//args
mergeArrays(["apple","orange"],["mango","cherry"])




