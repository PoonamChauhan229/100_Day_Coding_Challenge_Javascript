// Write a JavaScript function to remove duplicate values from an object.  

// 📦 **Input Example:**  
// `obj = { a: 1, b: 2, c: 1, d: 3, e: 2 }`  
// ✅ Output: `{ a: 1, b: 2, d: 3 }`  

// JavaScript function       >>removeDuplicates()
// remove duplicate values from an object.

// Approach:
// Set Object
// Create a Set
// uniqueValues=new Set() >>Track of unique values
// result={} >>Store our Final Output

// Loop >>Object.entries() >>key value
// obj ={ a: 1, b: 2, c: 1, d: 3, e: 2 }
// Object.entires(obj)
// [["a",1],["b,2"],["c",1],["d",3],["e",2]]
// Destructing
// const [key,value]=["a",1] >> key =a value =1

// for(const [key,value] of Object.entries(obj)){
    //remove duplicate values
    // Chcek >value is present or not
    // unique >>Add it to set
    // Add to result {}
// }

// Print our result {} >> Output

// if condition
// Set Methods
// add(value) >>Add a value to the Set >>If exists then not added
// has(value) >>Boolean Value >> True || False  >>Check that value is present or not

// present >>TRue >> Existing Dont add >> No execute
// -- !
// --!true >>false >> if condition wont execute
// --!false >>true >> if condition execute

// if(!uniqueValues.has(value)){
    // uniqueValues.add(value)
    // result[key]=value
// }

function removeDuplicates(obj){
   // console.log(obj)

    let uniqueValues=new Set()
    let result={}

    for(const [key,value] of Object.entries(obj)){
        if(!uniqueValues.has(value)){
            uniqueValues.add(value)
            result[key]=value
        }
    }
    console.log(result)
}
removeDuplicates({ a: 1, b: 2, c: 1, d: 3, e: 2 })

