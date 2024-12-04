// Write a function that takes a date as input and determines if it falls on a weekend (Saturday or Sunday).

// Input: "2024-12-01"  
// Output: "Its a Weekend day"  

// Input: "2024-12-03"  
// Output: "Its not a Weekend day"

// JS Function                        >>isWeekend()
// determines if it falls on a weekend

//Approach:
//Date() constructor Function >> new keyword >>new Date() >> Date Obj >>Current Date and Time
//"2024-12-01"  >>new Date("2024-12-01") >>Get date and time
// console.log(new Date())
// console.log(new Date("2024-12-01")) 
//Date Object >>getDay()>>Day of the week >>0-6 >>SMTWTFS >>0123456
//Weekend >> 0 || 6  
//if( 0 || 6 ) true("Its a Weekend day" ) else >> false (Its not a Weekend day")


function isWeekend(date){
   // console.log(date)

    const dateObj=new Date(date)
   // console.log(dateObj)

    const day=dateObj.getDay()
   // console.log(day)//0-6

    if(day==0||day==6){
        console.log(date,": Its a Weekend day")
    }else{
        console.log(date,": Its Not a Weekend day")
    }
}
isWeekend("2024-12-01")
isWeekend("2024-12-07")
isWeekend("2024-12-03")
