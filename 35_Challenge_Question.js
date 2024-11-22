// Write a JS Function to sort the characters in alphabetical order of a given string.

// Input:"javascript" 
// Output:"aacijprstv".

// JS Function                              >>sortCharacters()
// sort the characters in alphabetical order


//Approach:
//split("") >>split after each character
//sort() >>Array Method >>sort the characters in alphabetical order
//join("") >>join the sorted array >>string

function sortCharacters(str){//params
    //console.log(str)
    
    const sortedStr=str.split("").sort().join("")
    console.log(`Sorted String ${str} characters in alphabetical order: `,sortedStr)
}
sortCharacters("javascript")
sortCharacters("helloworld")
