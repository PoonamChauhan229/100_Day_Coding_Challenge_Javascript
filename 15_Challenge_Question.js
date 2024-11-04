// Write a JavaScript function that converts string into A PascalCase

// JavaScript function               >>toPascalCase()
// converts string into A PascalCase
// hello world >> HelloWorld

// split(" ") >> return an array
// map()>> function >>element >> work on each element >>array method
// charAt(0) >> character/letter >>index
// toUpperCase()
// substring(1) >> extracts the portion of the string
// toLowerCase()
// join("")

function toPascalCase(str){
    //console.log(str)
    let arr=str.split(" ")
   // console.log(arr)
    let upperLower=arr.map((element)=>element.charAt(0).toUpperCase()+element.substring(1).toLowerCase())
    //console.log(upperLower)
    let pascal=upperLower.join("")
    console.log(`Pascal Case of ${str}:`,pascal)

}
toPascalCase("heLLo World day15")
toPascalCase("work on each element")

