// Write a JS Function reverse the order of the words and also reverse the characters of each word.

// input:"Welcome to JavaScript" 
// Output: "tpircSavaJ ot emocleW".

// JS Function      >>reverseOrder()                                
// reverse the order of the words
// reverse the characters of each word

//Approach:
//split(" ") >>Array >>3
//reverse()
//map((element)=>element.split("").reverse().join(""))
//array >>reverse().join(" ")


function reverseOrder(sentence){//params
   // console.log(sentence)
    const wordsArray=sentence.split(" ")
   // console.log(wordsArray)

    const reversedWords=wordsArray.map((element)=>element.split("").reverse().join(""))
   // console.log(reversedWords)

    const reversedSentence=reversedWords.reverse().join(" ")
    console.log(`Reverse the order of the words & characters of each word:`,reversedSentence)
}
reverseOrder("Welcome to JavaScript" )
reverseOrder("Coding is fun")


