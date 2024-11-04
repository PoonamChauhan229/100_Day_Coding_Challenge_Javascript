// Write a JavaScript function that checks if a given number is a palindrome

// JavaScript function  isPalindrome()
// number is a palindrome

// 121 || 141 || 151
// OGNUM==REVNUM

// reverse() >>Array Method >> Returns an array
// split("")   >>String Method >> Returns an array
// toString()  >> Convert into String
// join()      >> Array Methods

function isPalindrome(number){
    //console.log(number)
    let numStr=number.toString()
    let revStr=numStr.split("").reverse().join("")
   // console.log(revStr)

    // if else
    if(numStr==revStr){
        console.log(`${numStr} is an Palindrome No`)
    }else{
        console.log(`${numStr} is Not an Palindrome No`)
    }

}
isPalindrome(7890)// args
isPalindrome(121)