// Write a function that checks if a given string starts and ends with the same character. 

// JS function                           >>startsEndsSame()
// starts and ends with the same character
// Hello Start>H|| ENd>o  || Comparision OPerator (==) H==o ||H===o
// Hello >>5 str >> str[0]  ===   str[str.length-1] >> true || false

function startsEndsSame(str){//params
  //  console.log(str)
   if(str.length==0){
    console.log("The string is emtpty , we cannot proceed with the comparision")
    return; //early return
   }
    const result=str[0]==str[str.length-1]
   // console.log(result)
    if(result){// Boolean Value
        console.log(`Yes, Given ${str} starts and ends with the same character`)
    }else{
        console.log(`No, Given ${str} doesnt starts and ends with the same character`)
    }
}
startsEndsSame("Hello")//args
startsEndsSame("radar")
startsEndsSame("")






