// Write a JavaScript function that checks whether all values in an object are of the same data type.  

// 🔢 **Example:**
// input >>{ a: 1, b: 2, c: 3 }           Output >> true
// input >>{ a: 1, b: "text", c: 3 }      Output >> false
// input >>{}                             Output >> true
// input >>{ a: true, b: false, c: true } Output >> true

// JavaScript function     >>areValuesSameDataType()
// whether all values in an object are of the same data type

// Approach:
// Extract Value >>Object
// Object.values() >> []
// obj={ a: 1, b: 2, c: 3 } 
// Object.values(obj) >>[1,2,3] >>values
// >>{}  >>true
// if >>values.length===0 >>Print true  >>early return

// check >> remaining input objects
// firstType=typeof values[0]  >>number
// firstType ===comparision 
// every() >>cbk function >>condition >>passes true >>each 
// result =values.every((element)=>typeof element ===firstType) >>true ||false
// result >> Print

function areValuesSameDataType(obj){
    //console.log(obj)
    let values=Object.values(obj)
    //console.log(values)

    if(values.length==0){
        console.log(true)
        return;
    }

    let firstType=typeof values[0]
   // console.log(firstType)

    let result=values.every((element)=>typeof element === firstType)
    console.log(result)
   
}
areValuesSameDataType({})
areValuesSameDataType({ a: 1, b: 2, c: 3 } )
areValuesSameDataType({ a: 1, b: "text", c: 3 })
areValuesSameDataType({ a: true, b: false, c: true })





