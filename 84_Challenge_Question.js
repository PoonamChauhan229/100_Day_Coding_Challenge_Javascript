// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!

// Its a day 84 of our 100 days of coding challenge in JavaScript, and we have got another exciting problem to solve together.

// Today’s challenge is to **Check if All Object Values are of the Same Data Type**.

// 📝 **Problem Statement:**  
// Write a JavaScript function that checks whether all values in an object are of the same data type.  

// 🔢 **Example:**
// input >>{ a: 1, b: 2, c: 3 }           Output >> true
// input >>{ a: 1, b: "text", c: 3 }      Output >> false
// input >>{}                             Output >> true
// input >>{ a: true, b: false, c: true } Output >> true

// 🛠️ **Approach:**  
// 1️⃣ **Extract Values:** Use `Object.values()` to extract all values from the object. 
// values = Object.values(obj)
//  { a: 1, b: 2, c: 3 } >> [1, 2, 3]

// 2️⃣ **Handle Edge Case:** If the object is empty, return `true`. 
// if (values.length === 0) return true 

// 3️⃣ **Check Data Type:** Store the type of the first value using `typeof`.  
// const firstType = typeof values[0]; // "number"

// 4️⃣ **Verify All Types:** >> use every()

// every() method checks if all elements in an array pass a provided test. It returns true if all elements satisfy the condition; otherwise, it returns false. 

// Use `every()` to ensure all values match the first type.  

// result = values.every(value => typeof value === firstType); // true

// 🚀 **JavaScript Implementation:**
function areAllValuesSameType(obj) {
    const values = Object.values(obj);
    if (values.length === 0) {
        console.log(true)
        return;
     } // Return true for an empty object

    const firstType = typeof values[0]; // Get the type of the first value

    let result= values.every(value => typeof value === firstType);
    console.log(result)
}

// 🔢 **Test Cases:**
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: "text", c: 3 };
const obj3 = {};
const obj4 = { a: true, b: false, c: true };

areAllValuesSameType(obj1); // true
areAllValuesSameType(obj2); // false
areAllValuesSameType(obj3); // true (empty object)
areAllValuesSameType(obj4); // true

// 💡 **Why is this challenge useful?**
// - Enhances understanding of **data validation** techniques.  
// - Strengthens concepts of **data types** and array methods like `.every()`.  
// - Helpful in scenarios like **form validation** and data consistency checks.  

// Dont forget to like, share, and subscribe to my channel for more exciting content!
// 🎉 Keep pushing your limits! Don't forget to like, share, and subscribe for more challenges! 🚀
