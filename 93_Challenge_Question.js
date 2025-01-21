// Hey Everyone 👋🏻 Welcome Back to Code with Poonam!
// It's Day 93 of the 100 Days of JavaScript Coding Challenge!

// 🌟 Today's challenge is to convert an object into a query string format.

// 📝 **Problem Statement:**  
// Write a JavaScript function that takes an object and converts it into a query string format.

// 📦 **Input:** { name: "Alice", age: 25, city: "Wonderland" }  
// 📦 **Output:** "name=Alice&age=25&city=Wonderland"

// 📦 **Input:** { isActive: true, score: 95, email: "john229@example.com" }  
// 📦 **Output:** "isActive=true&score=95&email=john229%40example.com"

// 📦 **Input:** { firstName: "John", lastName: "Doe", city: "New York" }  
// 📦 **Output:** "firstName=John&lastName=Doe&city=New%20York"

// 🛠️ **Approach (Step-by-Step Explanation):**

// Query String:
// A query string is a part of a URL that contains key-value pairs, used to pass data to the server. It starts after the ? symbol and separates key-value pairs with &, where each pair is in the format key=value

// 1️⃣ **Get Object Keys:**  
//    - Use `Object.keys()` to get all the keys from the object.  
//    - **Definition:** `Object.keys(obj)` returns an array of an object's own enumerable property names (keys).  
//    - Example: `{ name: "Alice", age: 25 } -> ['name', 'age']`  

// 2️⃣ **Iterate Over Keys and Build Key-Value Pairs:**   key=value
//    - Use `map()` to iterate over the keys and create a key-value pair in the format `key=value`.  
//    - **Definition:** The `map()` method creates a new array populated with the results of calling a provided function on every element in the array.  
//    - Example: `['name', 'age'].map(key => `${key}=${obj[key]}`) -> ['name=Alice', 'age=25']`  

// 3️⃣ **Encode URI Components:**  
// endcodeURIComponent() is an inbuilt JavaScript function that encodes a URI ( Uniform Resource Identifier)component, such as a protocol, hostname, path, query string, or fragment.
// so here it  ensures that special characters are encoded, 

//    - Example: `encodeURIComponent('New York') -> 'New%20York'`  

// 4️⃣ **Join the Key-Value Pairs into a Query String:** 
// The join() method is an array method in JavaScript that combines all elements of an array into a single string, with a specified separator between them. It returns the resulting string

//    - Use `join("&")` to join the key-value pairs array into a single string with `&` separating the pairs.  
//    - Example: `['name=Alice', 'age=25'].join("&") -> 'name=Alice&age=25'`  

// 🚀 **JavaScript Implementation:**

function objectToQueryString(obj) {
    // Step 1: Get all keys from the object
    let objKeys = Object.keys(obj);
    console.log("Object Keys:", objKeys);

    // Step 2: Create key-value pairs, encode them, and build the query
    let query = objKeys.map(element => 
        `${encodeURIComponent(element)}=${encodeURIComponent(obj[element])}`
    );
    console.log("Key-Value Pairs:", query);

    // Step 3: Join key-value pairs into a query string format
    let queryString = query.join("&");
    console.log("Query String:", queryString);
}

// 🔢 **Test Cases with Input and Output:**
objectToQueryString({ name: "Alice", age: 25 });
// Output: name=Alice&age=25

objectToQueryString({ isActive: true, score: 95, email: "john229@example.com" });
// Output: isActive=true&score=95&email=john229%40example.com

objectToQueryString({ firstName: "John", lastName: "Doe", city: "New York" });
// Output: firstName=John&lastName=Doe&city=New%20York

  

// 💡 **Why is this challenge useful?**  
// - Teaches you how to process **objects** and convert them into a **query string format**.  
// - It's useful for **building query strings** for **URL parameters** and **API requests**.  
// - Enhances understanding of **JavaScript methods** and **working with data**.

// 🎯 Keep coding and improving your JavaScript skills! 🚀
// Don't forget to like, subscribe, and hit the notification bell for more daily challenges. 🎉