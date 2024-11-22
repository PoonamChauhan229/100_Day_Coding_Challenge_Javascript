// Write a JS Function to count the number of vowels and consonants.
// For example, 
// Input : "JavaScript", 
// Output :{ vowels: 3, consonants: 7 }.

// JS Function                               >>countVowelsConsonants()
// count the number of vowels and consonants

//Approach:

// vowels >> aeiou
//match() >>pattern || array
//regex pattern >>/[aeiouAEIOU]/g
// array >> .length >>count
//consonants >> str.length-vowelslength >> 7


function countVowelsConsonants(str){//params
    //console.log(str)

    const vowelsCount=str.match(/[aeiouAEIOU]/g).length
    //console.log(vowelsCount)

    const consonantsCount=str.length-vowelsCount
    //console.log(consonantsCount)
    // Output :{ vowels: 3, consonants: 7 }.
    const result={
        vowels:vowelsCount,
        consonants:consonantsCount
    }
    console.log(result)


}
countVowelsConsonants("JavaScript")//args