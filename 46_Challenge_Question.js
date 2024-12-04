// Write a function that takes a date as input and returns true if it's in the future, otherwise false.

// Example:
// Input :2025-01-01` >> Output: true, Its an future date
// Input:'2024-12-01' >> Output: false, Its an past date

// JS Function                                              >>isFutureDate()
// takes a date as input >> true(future date) || false(Past Date)

//Approach
//Date() constructor Function
// new >>
// new Date() >> Current Date and time

// console.log(new Date())
// console.log(new Date("2025-01-01"))
// >  new Date("2025-01-01") > new Date()  >>> Future Date(true) || Past date(false)
// if else statement


function isFutureDate(date){
   // console.log(date)
    if(new Date(date)> new Date()){
        console.log("true, Its an future date")
    }else{
        console.log("false, Its an past date")
    }

}
isFutureDate("2025-01-01")//args
isFutureDate("2024-12-01")
