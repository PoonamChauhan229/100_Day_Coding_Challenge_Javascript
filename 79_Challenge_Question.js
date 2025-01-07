// 🌟 **Welcome to Day 78 of Code with Poonam!** 🌟  
// Today’s challenge is to **Swap Keys and Values in an Object**.

// 📝 **Problem Statement**:  
// Write a JavaScript function that swaps the keys and values of an object.  

// Example:  
// ✅ Input: { a: 1, b: 2, c: 3 }  
// ✅ Output: { '1': 'a', '2': 'b', '3': 'c' }  

// Input: { apple: 'fruit', carrot: 'vegetable' }  
// Output: { fruit: 'apple', vegetable: 'carrot' }

// 🧩 **Approach Explained**:  
// swapped={} >>To store swapped keys and values 
// for of loop
// 1️⃣ Use `Object.entries()` to convert the object into an array of `[key, value]` pairs.  
// Object.entries(obj)
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// destructing up
// const [ key, value ] = [ 'a', 1 ];

// for(const [key,value] of Object.entries(obj)){
    // 2️⃣ Swap the pairs so that values become keys and vice versa.  
    // swapped[value] = key; // Swap keys and values
// }

// 🚀 **JavaScript Implementation**:
function swapKeysAndValues(obj) {
    const swapped = {};
    console.log(Object.entries(obj))
    for (const [key, value] of Object.entries(obj)) {
        swapped[value] = key; // Swap keys and values
    }
    console.log(swapped); // Print the swapped;
}

// 🔢 **Test Cases**:
const original1 = { a: 1, b: 2, c: 3 };
const original2 = { apple: 'fruit', carrot: 'vegetable' };


swapKeysAndValues(original1);  // Output: { '1': 'a', '2': 'b', '3': 'c' }
swapKeysAndValues(original2);  // Output: { fruit: 'apple', vegetable: 'carrot' }
// 💡 **Key Concept Alert!**  
// - `Object.entries(obj)` → Converts an object into an array of `[key, value]` pairs.  
// - `Object.fromEntries(arr)` → Converts an array of `[key, value]` pairs back into an object.  

// 🎯 **Challenge Extension**:  
// Try handling cases where values might not be unique!  
// Example: { a: 1, b: 1 } → How will you handle duplicate values?  

// 🎉 Keep coding and see you tomorrow for Day 79! 🚀
