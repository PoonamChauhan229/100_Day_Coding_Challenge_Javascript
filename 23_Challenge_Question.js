// Write a JavaScript function that merges two arrays or two objects. Print an error if the inputs are of different types.

// JavaScript function                               >>mergeData()
// merges two arrays or two objects
// Print an error if the inputs are of different types


// Spread Operator (...)
// [...arr1,...arr2] >>Array
// {...obj1,...obj2} >>Object

// if(condition1) else if(condition2) else(Error)

// Check ? Array
// isArray()
// Array.isArray(arr1) && Array.isArray(arr2) >> true >>[...arr1,...arr2] >>Array

// Check ? Object
// type obj1 =="object" && type obj2=="object" && !Array.isArray(obj1) && !Array.isArray(obj2)  >> true >> {...obj1,...obj2} >>Object
// typeof
//else 
// inputs are of different types.

function mergeData(input1,input2){
    //console.log(input1,input2)
    // Array > object || object >object
    //console.log(typeof(input1),typeof(input2))
    if(Array.isArray(input1) && Array.isArray(input2)){
        const mergeArray=[...input1,...input2]
        console.log(mergeArray)
    }
    else if(typeof input1=='object' && typeof input2=='object'&& !Array.isArray(input1) && !Array.isArray(input2)){
        // console.log("objects are present")
        const mergeObject={...input1,...input2}
        console.log(mergeObject)
    }
    //Print an error if the inputs are of different types
    else{
        console.log("Error:inputs are of different types",input1,input2)
        // console.error()
    } 
    

}
mergeData([1,2,3],[4,5,6])
mergeData({a:30,b:89},{c:90,d:67})
mergeData([45,67],{t:90,u:67})

  
  





