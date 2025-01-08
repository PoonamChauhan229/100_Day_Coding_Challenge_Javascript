// Write a JavaScript function that checks if all the values of an object are numeric values.

// 📦 **Input Example:**
// 1️⃣ Input: `{ a: 20, b: 30, c: 50 }`  
//    ✅ Output: `true`  

// 2️⃣ Input: `{ a: 20, b: "30", c: 50 }`  
//    ❌ Output: `false`  

// 3️⃣ Input: `{ a: 10, b: NaN, c: 40 }`  
//    ❌ Output: `false`

// JavaScript function            >>hasOnlyNumericValues()
// checks if all the values of an object are numeric values.

// Approach:
// for of loop >>iterate over the array of object values
// Object values >>Object.values() >>array of object values
// let obj={ a: 20, b: 30, c: 50 }` >>Object.values(obj)
// [20,30,50] 

// for(const value of Object.values(obj)){
// if condition
// Check for non numeric values.>>true
// Print false
// return;
//  }

// Print >>numeric values.>> Print true

// if condition
// typeof 20 >>"number"
// typeof "20" >>"string"
// typeof value !==number

// isNaN(value)
// ||

// if(typeof value !=="number" ||isNaN(value))

function hasOnlyNumericValues(obj){
  //  console.log(obj)
  //  console.log(Object.values(obj))

    for(const value of Object.values(obj)){
        // if condition >>Non numeric values
        if(typeof value !=="number" || isNaN(value)){
            console.log(false)
            return
        }
    }
    console.log(true)
}
hasOnlyNumericValues({ a: 20, b: 30, c: 50 })
hasOnlyNumericValues({ a: 20, b: "30", c: 50 })
hasOnlyNumericValues({ a: 10, b: NaN, c: 40 })