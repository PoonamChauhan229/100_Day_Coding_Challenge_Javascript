// Write a JavaScript function to count how many times each value appears in an object.

// 🔢 **Example:**
// Input: `{ a: 1, b: 2, c: 1, d: 3, e: 2 }`
// Output: `{ 1: 2, 2: 2, 3: 1 }`

// Input: `{ a: "apple", b: "banana", c: "apple", d: "grape" };
// Output: { apple: 2, banana: 1, grape: 1 }

// Input: `{ a: true, b: false, c: true, d: true }`;
// Output: { true: 3, false: 1 }

// JavaScript function            >>countValueOccurences()
// count how many times each value appears


// Approach:
// count={} >>Value >> Occurred
// for of loop
// Object.values() >> return array of values
// obj ={ a: 1, b: 2, c: 1, d: 3, e: 2 }
// Object.values(obj) >>[1,2,1,3,2]
// for(const value of Object.values(obj)){
    // Increment by 1 || Intilaize by 1
    // count[value]=(count[value] || 0) + 1
// }

// { a: 1, b: 2, c: 1, d: 3, e: 2 } >>[1,2,1,3,2]
// count={} >>{1:2,2:2,3:1}
// 1:1+1=2 >>1:2
// 2:1+1=2
// 3:1

// >>Print Count Object


function countValueOccurences(obj){
    //console.log(obj)
    const count={}
   // console.log(Object.values(obj))
    for(const value of Object.values(obj)){
      //  console.log(value)
        count[value]=(count[value] || 0)+1        
    }
    console.log(count)
}
countValueOccurences({ a: 1, b: 2, c: 1, d: 3, e: 2 })
countValueOccurences({ a: "apple", b: "banana", c: "apple", d: "grape" })
countValueOccurences({ a: true, b: false, c: true, d: true })












