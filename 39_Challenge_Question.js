// Write a Javascript function that removes duplicate characters from a string.

// For example:
// Input: `"programming"`
// Output: `"progamin"`


// Javascript function                      >>removeDuplicates()
// removes duplicate characters from a string

//Approach
//Set() >> new Set("programming") >>create an instance of set Object
// { 'p', 'r', 'o', 'g', 'a', 'm', 'i', 'n' }
//{} >>actual/unique >>Set Object
//Spread Opertor(...) >>[...output] >>Array 
//join("") >>into string 

function removeDuplicates(inputString){//params
 // console.log(inputString)

  const uniqueCharcters=new Set(inputString)
  //console.log(uniqueCharcters)

  const resultString=[...uniqueCharcters].join("")
  console.log(`unique Charcters:`,resultString)


}
removeDuplicates("programming")//args
removeDuplicates("javascript")
