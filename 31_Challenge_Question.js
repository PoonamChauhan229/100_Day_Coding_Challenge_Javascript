// Write JS Function to reverse each word individually but maintain the word order in the given sentence.

// Given Sentence, the input : "Welcome to JavaScript"
// Output: "emocleW ot tpircSavaJ".

// JS Function                   >>reverseWords()
// reverse each word individually
// maintain the word order

//Approach
//split(" ") >> ["Welcome", "to", "JavaScript"]
//reverse()
//map((element)=> element >>split("") >>reverse() >>join("")) 
// >>"Welcome">>["w","e","l","c","o","m","e"] >>["e","m","o","c","l","e","w"] >>["emocleW"]
// >>["emocleW", "ot" ,"tpircSavaJ"]
// join(" ") >> "emocleW ot tpircSavaJ".

function reverseWords(sentence){//params
    //console.log(sentence)
    const wordsArray=sentence.split(" ")
   // console.log(wordsArray)

    const reversedWords=wordsArray.map((element)=>element.split("").reverse().join(""))
   // console.log(reversedWords)
    const reversedSentence=reversedWords.join(" ")
    console.log(`Reserved Sentence-${sentence}:`,reversedSentence)
}
reverseWords("Welcome to JavaScript")//args
reverseWords("each word individually")



