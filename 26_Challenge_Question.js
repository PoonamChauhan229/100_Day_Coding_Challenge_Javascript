// Write a JavaScript function to check if one string is an substring of another string

// JavaScript function                          >>isSubstring()
// one string is an substring of another string

// Str >>"Hello, Welcome to Code with Poonam"
// substr="Welcome"
// substr1="code"

// exists > true     >> Yes
//not exists > false >> No

// toLowerCase() >> Str || substr
// includes()
// Str.includes(substr) >> true || false

function isSubstring(str,subStr){
    //console.log(str,subStr)
    let result=str.toLowerCase().includes(subStr.toLowerCase())
    //console.log(result)// boolean values >> true || false
    // if else statement
    if(result){// if(true)
        console.log(`Yes, ${subStr} is a subString of ${str}`)
    }else{
        console.log(`No, ${subStr} is not a subString of ${str}`)
    }

}
//Testcase1
const mainString="Hello, Welcome to Code with Poonam"
const subString="WeLCoME"
isSubstring(mainString,subString)

// Testcase2
const mainString1="Hello, Welcome to World of Javascript!"
const subString1="Javascript123"
isSubstring(mainString1,subString1)
 







