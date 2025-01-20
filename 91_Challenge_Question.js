// Write a JavaScript function to calculate the length of the longest string value in an object.

// 📦 **Input:** { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }  
// 📦 **Output:** 10  

// 📦 **Input:** { x: 'elephant', y: 'giraffe', z: 'hippopotamus' }  
// 📦 **Output:** 12  

// 📦 **Input:** { m: 'short', n: 'tiny', o: 'lengthyword', p: 'word' }  
// 📦 **Output:** 11

// JavaScript function                 >>findLongestStringLength()
// length of the longest string value in an object. 

// { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }  
// apple        >>5
// banana       >>6
// kiwi         >>4
// grapefruit   >>10
// 10 >>length

// { x: 'elephant', y: 'giraffe', z: 'hippopotamus' } 
// elephant         >>8
// giraffe          >>7
// hippopotamus     >>12
//12

// { m: 'short', n: 'tiny', o: 'lengthyword', p: 'word' } 
// short           >>5
// tiny            >>4
// lengthyword     >>11
// word            >>4
// 11

// Approach:
// Extract Values
// Object.values() >>return an array of the values of Object
// obj={ a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }
// Object.values(obj)
// ["apple","banana","kiwi","grapefruit"] >>objValues

// Each element >>String >>filter()
// arr.filter(cbk function) >>condition >>passess>> true values >>[]
// objValues.filter((element)=>typeof element ==="string")
// ["apple","banana","kiwi","grapefruit"] >>stringValues

// map() || length
// arr.map(cbk function) >>transform >>[]
// stringValues.map((element)=>element.length)
// [5,6,4,10]

// Find max length
// Math.max() || Spread Operator
// Math.max(...[5,6,4,10])
// 10 >>Max Length

function findLongestStringLength(obj){
    //console.log(obj)

    let objValues=Object.values(obj)
   // console.log(objValues)

    let stringValues=objValues.filter((element)=>typeof element ==="string")
    //console.log(stringValues)

    let stringLength=stringValues.map((element)=>element.length)
    //console.log(stringLength)

    let longestLength=Math.max(...stringLength)
    console.log(longestLength)
}
findLongestStringLength({ a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' })
findLongestStringLength({ x: 'elephant', y: 'giraffe', z: 'hippopotamus' })
findLongestStringLength({ m: 'short', n: 'tiny', o: 'lengthyword', p: 'word' } )
findLongestStringLength({a:75,b:"hair",c:"shoes",d:100})
