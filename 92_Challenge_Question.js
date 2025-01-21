// Write a JavaScript function to find the longest string value in an object.

// 📦 **Input:** { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }  
// 📦 **Output:** grapefruit 

// 📦 **Input:** { x: 'elephant', y: 'giraffe', z: 'hippopotamus' }  
// 📦 **Output:** hippopotamus 

// 📦 **Input:** {a:75,b:"hair",c:"shoes",d:100} 
// 📦 **Output:** shoes

// JavaScript function               >>findLongestString()
// longest string value in an object

// { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' } 
// apple >5 banana >6 kiwi >4 grapefruit >10
// grapefruit

// { x: 'elephant', y: 'giraffe', z: 'hippopotamus' } 
// elephant >8  giraffe >7 hippopotamus >12
// hippopotamus

// {a:75,b:"hair",c:"shoes",d:100} 
// 75 hair shoes 100
// hair >4  shoes >5
// shoes

// Approach:
// Extract Values >>Object.values()
// obj={ a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' } 
// Object.values(obj)
// ["apple","banana","kiwi","grapefruit"]  >>objValues

// Extract String Values >>filter()
// arr.filter(cbk function) >>condition >> true values >>[]
// false values >> ignore
// objValues.filter((element)=>typeof element ==="string")
// ["apple","banana","kiwi","grapefruit"] >>stringValues

// map() || length
// arr.map(cbk function) >>transform our array >> new array
// stringValues.map((element)=>element.length) 
// [5,6,4,10] >>stringLengths

// Longest Length
// Math.max() || Spread operator
// Math.max(...stringLengths) >>10 >>longestLength

// Longest String
// filter()
// stringValues.filter((element)=>element.length===longestLength)
// ["grapefruit"]  >>longestString
// grapefruit

// Spread Opertor || index
// ...["grapefruit"] >>grapefruit   >>...longestString 
// longestString[0] >>grapefruit

function findLongestString(obj){
    //console.log(obj)

    let objValues=Object.values(obj)
    //console.log(objValues)

    let stringValues=objValues.filter((element)=>typeof element ==="string")
   // console.log(stringValues)

    let stringLengths=stringValues.map((element)=>element.length)
    //console.log(stringLengths)

    let longestLength=Math.max(...stringLengths)
    //console.log(longestLength)

    let longestString=stringValues.filter((element)=>element.length===longestLength)
    // console.log(longestString)

    //  console.log(...longestString)
    console.log(longestString[0]) // best one

}
findLongestString({ a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' } )
findLongestString({ x: 'elephant', y: 'giraffe', z: 'hippopotamus' } )
findLongestString({a:75,b:"hair",c:"shoes",d:100} )
