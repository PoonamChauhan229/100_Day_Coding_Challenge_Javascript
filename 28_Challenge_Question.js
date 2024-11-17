// Write a function repeatString to repeat a given string n times, optionally converting it to uppercase or lowercase. If no case type is provided, keep the string unchanged

// function                   >>repeatString()
// repeat a given string n times
// uppercase or lowercase
// no case type is provided, keep the string unchanged


//repeat() >>str.repeat(3) >>hellohellohello
// uppercase  >> toUpperCase() or lowercase >>toLowerCase()
// conditionally >> if else 
// if(uppercase) >> toUpperCase()|| if(lowercase) >>toLowerCase()


function repeatString(str,n,caseType){//params
    //console.log(str,n,caseType)
    let repeated=str.repeat(n)
   // console.log(repeated)
    if(caseType){// caseType is present
       // console.log("uppercase  >> toUpperCase() or lowercase >>toLowerCase()")

        if((caseType.toLowerCase())=="uppercase"){
            repeated=repeated.toUpperCase()
            console.log(`Repeated String(Converted to UpperCase):`,repeated)
        }
        if(caseType.toLowerCase()=="lowercase"){
            repeated=repeated.toLowerCase()
            console.log(`Repeated String(Converted to LowerCase):`,repeated)
        }
    }else{
        console.log(`Repeated String (with no case):`,repeated)
    }

}
repeatString("Hello",3,"lowercase")//args
repeatString("javscRIPT",4,"uppercase")
repeatString("WOrld",2)
repeatString("HelloIndia",2,"uppERcase")
repeatString("ChalleNGE",5,"LowerCase")