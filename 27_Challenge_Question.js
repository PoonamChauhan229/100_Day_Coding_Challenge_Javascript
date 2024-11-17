// Write a Javascript function that accepts string as input and returns the length of the longest word in that string.

// Javascript function                      >>longestWord()
// that accepts string as input             >>"Hello Javascript"
// returns the length of the longest word
// "Hello Javascript"  >>10 

//Approach
//split(" ") >>["Hello","Javascript"]
//arr.map((element)=>element.length) >>[5,10]
//Math.max(...arr) >>10 >>Spread Operator

function longestWord(str){
   // console.log(str)
    let strSplit=str.split(" ")
   // console.log(strSplit)
    
    let wordsLength=strSplit.map((element)=>element.length)
   // console.log(wordsLength)

    let maxWord=Math.max(...wordsLength)
    console.log(`length of the longest word in that string:`,maxWord)
}
longestWord("Hello Javascript")
longestWord("function that accepts string as input")




