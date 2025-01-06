// Write a JavaScript function that Check if two strings are complementary (together contain all 26 English letters exactly once).

// 📦 **Input Example:**
// 1️⃣ Input String1 = 'ABDCFGIJKLMNOPQUVWXYZ';
// 2️⃣ Input String2 = 'EHRST';
// ✅ Output: 'yes'

// 1️⃣ Input String1 = 'AABBCC',
// 2️⃣ Input String2 = 'DDEEFF',
// ❌ Output: 'no'

// JavaScript function  >>areComplementary()
// Check if two strings are complementary
// complementary>>together contain all 26 English letters exactly once

// Approach
// Combine the String >>Concat
// combinedStr=string1+string2

// lowercase >>toLowerCase()
// lowercaseStr=combinedStr.toLowerCase()

// Remove the duplicate  >>Set()
// uniqueChars=new Set(lowercaseStr) >>Set object

// conditional check
// 26 unique Charcters  >>uniqueChars.size
// a-z        >>/^[a-z]+$/.test(lowercaseStr)

// if(uniqueChars.size==26 && /^[a-z]+$/.test(lowercaseStr)){
// print yes
// }else {print no}

function areComplementary(string1,string2){
   // console.log(string1,string2)

    let combinedStr=string1+string2
    //console.log(combinedStr)

    let lowercaseStr=combinedStr.toLowerCase()
    //console.log(lowercaseStr)

    let uniqueChars=new Set(lowercaseStr)
    //console.log(uniqueChars)
    //console.log(uniqueChars.size)

    if(uniqueChars.size==26 && /^[a-z]+$/.test(lowercaseStr)){
        console.log("Yes")
    }else{
        console.log("No")
    }   

}
areComplementary("ABDCFGIJKLMNOPQUVWXYZ","EHRST")
areComplementary("AABBCC","DDEEFF")



