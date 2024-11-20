// Write a Function to count how many times the character appears in a given string and a character

// For example,
// input:"hello world"
// output:with the character 'o' should return 2.

// JS Function                              >>countOccurences()  
// count how many times the character appears

//Approach:
//split("o") >>["hell"," w","rld"]
// length 3 
// Subract length by 1 >>3-1 >>2


function countOccurences(str,char){
  //  console.log(str,char)
   const arr=str.split(char)
  // console.log(arr)

   const occurences=arr.length-1;
   console.log(`Number of Occurences with the character ${char}:`,occurences) 
}
countOccurences("hello world","o")//args
countOccurences("charactercharactercharacter","a")