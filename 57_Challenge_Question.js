// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉  
// It’s Day 57 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// Today’s challenge is all about encoding strings based on character frequency:  

// 🔥 Problem Statement:  
// Write a JS Function to encode a string based on character frequency.

// 📝 Input Example:  
// Input: "aaabbc"  
// Output: "a3b2c1"  

// 🚀 Approach:  
// Use a split() >> Array Method to split the string into an array of characters.
// Use a loop to count the frequency of each character.
// for(let i=arr[i];i<arr.length;i++){}
// Create an object to store the character frequencies.
// let obj ={}
// if condition >>if(obj[arr[i]]){increment by 1} else{obj[arr[i]]=1}
// We can access by . dot operator right but here since its an string we can't access by . dot operator so we have to use [index] bracket notation.
// We have obj >>
// We will use a for in loop to iterate over the object and construct the final encoded string.
// for(key in obj){key+obj[key]} >> to get the fina; output we will store it in resultStr
// 5️⃣ Return the final encoded string.  

// 🛠️ Code Implementation:
function encodeString(str) {
    let arr=str.split("");
    // Step 1: Create an object to store frequencies
    let obj = {};

    // Step 2: Count character frequencies using a loop
    for (let i = 0; i < arr.length; i++) { 
        let char=arr[i]
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
   
    // Debug: Display the character frequency object (Optional)
    console.log("Character Frequency Object:", obj);

    // Step 3: Construct the result string
    let resultStr = "";
    for (let key in obj) {
        resultStr += key + obj[key];
    }
    
    // Debug: Display the final encoded string
    console.log("Encoded String:", resultStr);
    return resultStr;
}

// 🔍 Example Usage:
const input = "aaabbc";
console.log(`Input: ${input}`);
const output = encodeString(input);
console.log(`Output: ${output}`);

// 🎉 Explanation of Output:  
// For the input "aaabbc":  
// - 'a' occurs 3 times → a3  
// - 'b' occurs 2 times → b2  
// - 'c' occurs 1 time → c1  
// Final Encoded String: "a3b2c1"  

// 🌟 Why is this challenge important?  
// - Understanding string manipulation and loops is a fundamental skill in programming.  
// - This concept can be applied in real-world scenarios, such as data compression or encryption algorithms.  

// 💡 Tip of the Day:  
// Explore how to use objects effectively for frequency counting tasks in JavaScript.  

// 🚀 That’s it for today! Keep practicing and coding. See you tomorrow for Day 58 Challenge!  
