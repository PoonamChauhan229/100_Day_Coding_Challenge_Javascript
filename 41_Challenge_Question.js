// Write a JavaScript function to convert a Roman numeral string into an integer. 
// For example:
// - "III" → 3 1+1+1=3
// - "IV" → 4   5-1=4
// - "IX" → 9  10-1 =9
// - "LVIII" → 58
// - "MCMXCIV" → 1994

// Javascript Function                          >>romanToInt()
// convert a Roman numeral string into an integer

//Approach:
//Obj >>Roman numeral:integer || 1 to 1000 || 1 5 10 50 100 500 1000
// const romanMap={
//     I:1, V:5, X:10, L:50, C:100, D:500, M:1000
// }
// console.log(romanMap.M)
// console.log(romanMap["M"])
//for loop >> start >>0 and end roman.length i=0;i<roman.length;i++
// current  >>small sub >>larger= add
// next   >>add || sub >> if small >>add || sub
//romanVal 

function romanToInt(roman){//params
    let romanVal=0
    //console.log(roman)
    const romanMap={
        I:1, V:5, X:10, L:50, C:100, D:500, M:1000
    }
   for(let i=0;i<roman.length;i++){
        //console.log(i,roman[i])
        let current=romanMap[roman[i]]
        let next=romanMap[roman[i+1]] //next >>comparision
    // console.log(current,next)
        if(current<next){
            romanVal=romanVal-current
        }else{
            romanVal=romanVal+current
        }
   }
   console.log(`Roman numeral string-${roman} into an integer:`,romanVal)

}
romanToInt("III")
romanToInt("IV")
romanToInt("MCMXCIV")


