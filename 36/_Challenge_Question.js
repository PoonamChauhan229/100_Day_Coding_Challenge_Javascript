// Write a Function to count the number of uppercase and lowercase letters of a given string.

// For example, 
// Input :"JavaScript"
// Output :{ uppercase: 2, lowercase: 8 }.


// JS Function                                       >>countCase()
// count the number of uppercase and lowercase letters

//Approach
//match() >>returns an array of matched Letters
//match(---)
//Regex >>UpperCase >>/[A-Z]/g ||LowerCase >>/[a-z]/g
//length >> count 

function countCase(str){//params
    //console.log(str)
    const upperCaseCount=str.match(/[A-Z]/g).length
    //console.log(upperCaseCount)

    const lowerCaseCount=str.match(/[a-z]/g).length
    //console.log(lowerCaseCount)

    console.log({
        uppercase:upperCaseCount,
        lowercase:lowerCaseCount
    })
   
}
countCase("JavaScript")
countCase("Function")