// Write a function that takes a date and returns the corresponding day of the week (e.g., "Monday").

// Example:
// Input: "2024-12-05"
// Output: "Thursday"

//JS Function                          >>findDayOfWeek()
//returns the corresponding day of the week

//Approach:
//Date() >> new Date() >>Date Object 
// const todayDate=new Date("2024-12-05")
// console.log(todayDate)
//getDay() >>0-6 || 0-SUnday 6-Saturday
// const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(dayNames[1])

function findDayOfWeek(date){//params
    const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   // console.log(date)
    const dateObj=new Date(date)
    //console.log(dateObj)

    const dayNumber=dateObj.getDay()
   // console.log(dayNumber)

    console.log(`The day of the week is`,dayNames[dayNumber])
 
}
findDayOfWeek("2024-12-05")
findDayOfWeek("2024-12-04")
findDayOfWeek("2024-12-06")







