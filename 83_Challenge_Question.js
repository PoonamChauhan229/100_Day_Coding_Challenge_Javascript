// Hey Everyone 👋🏻 Welcome Back to Code with Poonam! 

// Its Day 83 of our 100 Days of Coding Challenge in JavaScript!

// Today’s challenge is all about `Object Manipulation`. We are going to **Reverse Keys and Values Order in an Object**.

// 📝 **Problem Statement:**  
// Write a JavaScript function that reverses the order of keys and values in an object.  

// input >> {a: 1, b: 2, c: 3}
// output >> {3: 'c', 2: 'b', 1: 'a'}

// 🛠️ **Approach:**  
// reversedObj = {}; // Initialize an empty object to store the result
// 1️⃣ **Convert to Array:** Use `Object.entries()` to convert the object into an array of key-value pairs.  
// {a: 1, b: 2, c: 3} Object.entries(obj) 
// >>[["a",1],["b",2],["c",3]]

// 2️⃣ **Reverse Order:** Apply `.reverse()` to invert the order of the pairs.  
// Object.entries(obj).reverse()
// >>[["c",3],["b",2],["a",1]]

// 3️⃣ **Swap Keys and Values:** Loop through the reversed array and swap the keys and values while building a new object.  
// For of loop
// Destructuring + entries = Object.entries().reverse() 
// for(const [key,value] of entries){
    // Swap the Keys and Values
    // reversedObj[value]=key
// }
// 4️⃣ **Print Result:** >>reverseObj

// 🚀 **JavaScript Implementation:**
function reverseKeysAndValues(obj) {
    const reversedObj = {}; // Initialize an empty object to store the result
    const entries = Object.entries(obj).reverse(); // Convert object to array and reverse it

    for (const [key, value] of entries) {
        reversedObj[value] = key; // Swap keys and values
    }

    console.log(reversedObj);
}

// 🔢 **Test Cases:**
const obj = { a: 1, b: 2, c: 3 };
reverseKeysAndValues(obj);// { '3': 'c', '2': 'b', '1': 'a' }

// 💡 **Why is this challenge useful?**
// - Strengthens understanding of **object manipulation** and `Object.entries`.  
// - Improves problem-solving skills for **data transformation** tasks.  
// - Useful in **data restructuring** tasks like swapping metadata or reorganizing data.  

// 🎉 Don't forget to like, share, and subscribe for more daily coding challenges! 🚀
// See you tomorrow with another exciting challenge. Keep Coding! 👩‍💻👨‍💻
