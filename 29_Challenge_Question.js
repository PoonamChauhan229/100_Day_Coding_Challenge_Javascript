// Write a function that takes a string as input and returns an array of all the numeric values present in the string.

// JS Function                                      >>extractNumbers()
// takes a string as input                          >>Hello12345World
// returns an array of all the numeric values present in the string >>[1,2,3,4,5]

// Approach:
// split("")>>["H","e","l","l","o","1","2","3","4","5","W","o","r","l","d"]
// parseInt(value) >>Number || NAN-Not a number
// map((element)=>parseInt(element)) >> returns an array [Number,NaN......]
// isNaN(value) >> value is NAN >> true | false
// filter((element)=>!isNaN(element)) >> return if a condition is satisfied >> true 
// [1,2,3,4,5]

function extractNumbers(str){
    //console.log(str)
    const arr=str.split("")
    //console.log(arr)

    const parsedElements=arr.map((element)=>parseInt(element))
    //console.log(parsedElements)

    const filteredElement=parsedElements.filter((element)=>!isNaN(element))
    console.log(`returns an array of all the numeric values present in the ${str}:`,filteredElement)
}
extractNumbers("Hello12345World")//args
extractNumbers("condit89i5o4n")
