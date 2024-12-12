// Write a JS function to find the common elements between two given arrays.

// 💡 Example:
// Input: Array 1: [1, 2, 3, 4], Array 2: [3, 4, 5, 6]
// Output: [3, 4]

// JS Function                             >>findCommonElements()
// common elements between two given arrays 

//Approach:
//filter((element)=>{condition}) >> true(considered) || false(ignored)>> []
//condition >>includes()


function findCommonElements(arr1,arr2){
   // console.log(arr1,arr2)
    const commonElements=arr1.filter((element)=>arr2.includes(element))
    console.log(`Common Elements :`,commonElements)
}

findCommonElements([1, 2, 3, 4],[3, 4, 5, 6])
findCommonElements([10,30,50],[30,20])