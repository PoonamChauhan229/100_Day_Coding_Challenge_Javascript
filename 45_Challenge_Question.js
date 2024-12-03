// Write a function to return the current date and time in a readable format.

// Example Output:
// Date: 12/03/2024, Time: 2:30:00 PM

// JS Function                              >>getCurrentDateTime()                
// current date and time in a readable format

//Approach:
//Date Object >>
//Date() constructor Function >>new keyword
//Methods 2
//toLocaleDateString() >>Current Date >>locale Date Format >>MM/DD/YYYY
//toLocalTimeString()  >>Current Time >> locale Time format >>HH:MM:SS AM/PM

// const now=new Date()
// now.toLocaleDateString()
// now.toLocaleTimeString()

function getCurrentDateTime(){
   // console.log("Get Current Date & Time ")

    const now=new Date()
   // console.log(now)

   const date= now.toLocaleDateString()
    const time=now.toLocaleTimeString()
    console.log(`Current Date:${date} & Current Time:${time}`)

}
getCurrentDateTime()