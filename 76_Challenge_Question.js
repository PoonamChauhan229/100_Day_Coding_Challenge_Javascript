// Write a JavaScript function that takes an object and converts it into an array containing two subarrays:  
// - One for the keys.  
// - One for the values.  

// 🧩 **Input Example**:  
// 1️⃣ Input: `{a: 1, b: 2, c: 3}`  
// Output: `[["a", "b", "c"], [1, 2, 3]]`  

// JavaScript function           >>convertObjToArr()
// takes an object and converts it into an array containing two subarrays
// [[One for the keys. ...],[One for the values....]]

// Approach:
// Object Methods()
// Object.keys()    >>Return an array of keys
// Object.values()  >>Return an arrays of Values

// {a: 1, b: 2, c: 3}` 
// Object.keys(obj)   >>["a", "b", "c"]
// Object.values(obj) >>[1, 2, 3]

// result=[["a", "b", "c"],[1, 2, 3]]
// Print >> result 

function convertObjToArr(obj){
   // console.log(obj)
    let keys=Object.keys(obj)
    //console.log(keys)
    let values=Object.values(obj)
   // console.log(values)
      
   let result=[keys,values]
   console.log(result)
}
convertObjToArr({a: 1, b: 2, c: 3})
convertObjToArr(({x:10,y:20}))
convertObjToArr({name:"Code with Poonam",date:"04TH JAN"})
