// Write a JavaScript function that rearranges the vowels in a string in ascending order while keeping the consonants in their original positions.  

// 🧩 **Input Example**:  
// 1️⃣ Input: `"selva"` → Output: `"salve"`  
// 2️⃣ Input: `"ebcda"` → Output: `"abcde"` 

// JavaScript function             >>rearrangesVowels()
// rearranges the vowels in a string in ascending order
// keeping the consonants in their original positions.

// 1️⃣ Input: `"selva"` → Output: `"salve"` 
// consonants >>slv
// vowels     >>ea  >>ae
// s_lv_  >>salve

// Approach:
// vowels=["a","e","i","o","u"]  >>list of Vowels
// vowelsList=[] >>Store Vowels of our String
// charList=[]   >> Final Output >>using Array.fill() >> null >> stringlength
// charList=new Array(string.length).fill(null)
// charList=[null,null,null,null,null]

// Step1: Charcter of a String >>Vowel Or not a Vowel
// >>Vowel      >>Push >>VowelList Array
// >>Consonants >>Push >>CharList Array >>original positions.
// Loop >> start >>0 end>>string.length-1

// for(let i=0;i<string.length;i++){
// if(vowels.includes(string[i])){//includes >>true
    // push
    // vowelList.push(string[i]) >>ea
// }else{
    // push
    // charList[i]=string[i] //original positions. slv >>s_lv_
// }
// }
// vowelList=["e","a"] >>sort() >>vowelList.sort() >>["a","e"]
// charList=["s",null,l,v,null]

// Step2 :Resinsert the vowels inside charList Array >>original positions.
// vowelIndex=0
// Loop >>start >>0 endpoint >>charList.length-1
// for(let i=0;i<charList.length;i++){
// if(charList[i]==null){
// updtae the VowelList charcter
// charList[i]=vowelList[vowelIndex++]
// }
// }
// charList >> join("") >> string
// charList.join("") >>salve

function rearrangesVowels(string){
    //console.log(string)
    let vowels=["a","e","i","o","u"]
    let vowelList=[]
    let charList=new Array(string.length).fill(null)
   // console.log(charList)

    // Step1:
    for(let i=0;i<string.length;i++){
        if(vowels.includes(string[i])){
            vowelList.push(string[i])
        }else{
            charList[i]=string[i]
        }
    }
   // console.log(vowelList)
    //console.log(charList)
    vowelList.sort()
  //  console.log(vowelList)

    // Step2:
    let vowelIndex=0;
    for(let i=0;i<charList.length;i++){
        if(charList[i]==null){
            charList[i]=vowelList[vowelIndex++]
        }
    }
   // console.log(charList)
    console.log(charList.join(""))


}
rearrangesVowels("selva")
rearrangesVowels("ebcda")







