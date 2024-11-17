// Write a JavaScript function that determines whether two strings are anagrams of each other

// JavaScript function  >>areAnagrams()
// strings are anagrams
// gu m || mug >> same length + contains same letters

// toLowerCase()
// replace(/\s+/g ,"") >> regex >> /\s+/g ,""

// split("") >> returns an array  >> string an method
// sort() >> array method >> alphabetical order
// join("")

// if else compare both the string >> Anagram || Not an Anagram

function areAnagrams(str1,str2){
   // console.log(str1,str2)
    let normalizeString1=str1.toLowerCase().replace(/\s+/g ,"")
    let normalizeString2=str2.toLowerCase().replace(/\s+/g ,"")
   // console.log(normalizeString1,normalizeString2)

    let sortedStr1=normalizeString1.split("").sort().join("")
    let sortedStr2=normalizeString2.split("").sort().join("")
    //console.log(sortedStr1,sortedStr2)

    if(sortedStr1==sortedStr2){
        console.log(`${str1} and ${str2} are Anagrams`)
    }else{
        console.log(`${str1} and ${str2} are not Anagrams`)
    }


}
areAnagrams("Liste n  ","silent")//args
areAnagrams("mug","GUM")
areAnagrams("hello","world")

