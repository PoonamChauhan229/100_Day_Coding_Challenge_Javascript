// Write a JavaScript function that counts the number of vowels in a given string.

// JavaScript function         >>countVowels()
// counts the number of vowels >>case 
// toLowerCase() >> aeiou 
// match()  >> returns an array >> .length
// pass the regex >>/[aeiou]/g

function countVowels(str){
    //console.log(str)
    let vowelCount=0;
    str=str.toLowerCase()
    //console.log(str)
    let vowelPattern=/[aeiou]/g
    let vowels=str.match(vowelPattern)
    // console.log(vowels.length)
    if(vowels){
        // console.log(vowels.length)
        vowelCount=vowels.length
    }
    console.log(`counts the number of vowels in a ${str}`,vowelCount)
}
countVowels("Hello World")
countVowels("x")



