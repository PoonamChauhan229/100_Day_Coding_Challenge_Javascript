// Write a JavaScript function to replace the middle element of a string with `*`.  
// If the string length is even, replace the two middle elements with `*`.  

// 🧩 **Input Examples**:  
// 1️⃣ Input: "hello" → Output: "he*lo"      >>5 >>Odd  >>"*"
// 2️⃣ Input: "worlds" → Output: "wo**ds"    >>6 >>Even >>"**"

// JS Function                >>replaceMiddleElement()
// replace the middle element of a string with `*`
// string length is even, replace the two middle elements with `*`

// Approach:
// split("") >>"hello" >>["h","e","l","l","o"]

// Odd >>1 middle element
// arr.length=5 >>5/2 >>2.5 >>2 >>Math.floor(2.5) >>2 ==>num
// arr[num]="*"  >>["h","e","*","l","o"]

// Even >>2 middle element
// "worlds" >>split("") >>"worlds".split("") >>["w","o","r","l","d","s"]
// arr.length=6  >>6/2  >>3 ==>num
// arr[num]="*" >>["w","o","r","*","d","s"]
// arr[num-1]="*" >>2 ["w","o","*","*","d","s"]

// join("") >>"he*lo"  || "wo**ds" 

// if condition >>if(arr.length%2==0){
    // even >>
    // arr[num]="*" >>["w","o","r","*","d","s"]
    // arr[num-1]="*" >>2 ["w","o","*","*","d","s"]
// }else{
    // arr[num]="*"  >>["h","e","*","l","o"]
// }

function replaceMiddleElement(str){
    // console.log(str)
    let arr=str.split("")
    // console.log(arr)
    let num=arr.length/2
    // console.log(num)
    // even odd
    if(arr.length%2==0){
        arr[num]="*",
        arr[num-1]="*"
    }else{
        let newNum=Math.floor(num)
        arr[newNum]="*"
    }
    console.log(`Input: ${str} → Output:`,arr.join(""))

}
replaceMiddleElement("hello")
replaceMiddleElement("worlds")
replaceMiddleElement("coding")
