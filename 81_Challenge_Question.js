// Write a JS Function to Merge two objects where values with the same keys are added together  

// 📦 **Input Example:**  
// 1️⃣ Input:  
// `obj1 = { a: 1, b: 2, c: 3 }`  
// `obj2 = { a: 3, b: 4, d: 5 }`  
// ✅ Output: `{ a: 4, b: 6, c: 3, d: 5 }`  

// JS Function           >>mergeAndSum()
// Merge two objects
// where values with the same keys are added together  

// Approach:
// Spread OPerator >>create a copy of 1st Object  >>obj1 ==>result
// result={...obj1} >>show final output

// for in loop >> second object >>obj2
// for(const key in obj2){
// logic >>sum value key exists || add new key value 
// result[key]=(result[key] || 0)+obj2[key]
// }

// Print >>result >>Output

function mergeAndSum(obj1,obj2){
   // console.log(obj1,obj2)
    let result={...obj1}
  //  console.log(result)

    for(const key in obj2){
        // logic >>sum value key exists || add new key value 
        result[key]=(result[key] || 0)+obj2[key] 
    }
    console.log(result)
}
mergeAndSum({ a: 1, b: 2, c: 3 },{ a: 3, b: 4, d: 5 })



