// Write a JavaScript Function to convert a string from CamelCase to SnakeCase 

// Input:"myVariableName"
// Output:"my_variable_name".

// JavaScript Function                        >>camelToSnake()
// convert a string from CamelCase to SnakeCase

//Approach
//replace() >>2 args || 1st args>> replaced place || 2nd args>> replaced value
// replaced place >>regex >> /([A-Z])/g
// replaced value >> "_$1" >> V >>_V
// toLowerCase()  >>

function camelToSnake(str){//params
    //console.log(str)
    const snakeCase=str.replace(/([A-Z])/g,"_$1").toLowerCase()
    console.log(`Converted ${str} into Snake Case:`,snakeCase)
}
camelToSnake("myVariableName")//args
camelToSnake("helloWorld")



