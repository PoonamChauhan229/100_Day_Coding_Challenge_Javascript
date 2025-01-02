// Write a JS Function to find first non repeating character in a string

// 🧩 **Input Example**:  
// 1️⃣ Input: "swiss" → Output: "w"  
// 2️⃣ Input: "aabbcc" → Output: null  
// 3️⃣ Input: "programming" → Output: "p"  

// JS Function               >>firstNonRepeating()
// first non repeating character in a string

// Approach:
// Loop >> i loop
// start >>0 || end str.length-1
// for(let i=0;i<str.length;i++){}
// char=str[i]
// indexOf()     >>returns the index of 1st occurence of that character
// lastIndexOf() >>returns the index of last occurence of that character
// str.indexOf(char)==str.lastIndexOf(char) >>if condition
// True >>first non repeating character >>return
// False >>Null

function firstNonRepeating(str){
    // console.log(str)
    for(let i=0;i<str.length;i++){ 
        let char=str[i]
        // console.log(char,str.indexOf(char),str.lastIndexOf(char)) 
        if(str.indexOf(char)==str.lastIndexOf(char)){
            // console.log(true)
            console.log(`First non repeating character in a string:`,char)
            return;
        }   
    }
    console.log(`NO REPEATED CHARACTERS-`,null)
}
firstNonRepeating("swiss")
firstNonRepeating("aabbcc")
firstNonRepeating("programming")
