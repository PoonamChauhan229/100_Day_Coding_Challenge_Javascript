// Write a JavaScript function to calculate the sum of all odd numeric values in an object.

// 📦 **Input:** { a: 1, b: 2, c: 'text', d: 3, e: 8 }  
// 📦 **Output:** 4  

// 📦 **Input:** { x: 11, y: 'hello', z: 7, w: 4 }  
// 📦 **Output:** 18  

// 📦 **Input:** { m: 101, n: 200, o: 'JS', p: true, q: 9 }
// 📦 **Output:** 110

// JS Function             >>sumOddNumericsValues()
// the sum of all odd numeric values in an object

// Approach:
// Extract Values
// Object.values()
// obj={ a: 1, b: 2, c: 'text', d: 3, e: 8 } 
// Object.values(obj) >>[1,2,"text",3,8] >>objValues

// Extract odd numeric values >>filter()
// arr.filter(cbk function) >>condition >>passess>>true values >>[]
// objValues.filter((element)=>condition)
// condition
// 2 checks  >> && operator
// check for number       >>typeof element==="number"
// check for odd number   >>element%2 !=0
// objValues.filter((element)=>typeof element==="number" && element%2!==0)
// [1,3]>>oddNumericValues

// the sum of all odd numeric values >>reduce()
// arr.reduce((acc,cv)=>acc+cv,initialValue)
// oddNumericValues.reduce((acc,cv)=>acc+cv,0)
// 4

// initialValue=0 ||acc=0 ||[1,3]>>oddNumericValues
// acc=0 cv=1 >>acc+cv >>0+1 =1 >>acc
// acc=1 cv=3 >>acc+cv >>1+3 =4 >>Final Output
// sum
// Print sum >>Final Output

function sumOddNumericsValues(obj){
    //console.log(obj)
    // Extract Values
    let objValues=Object.values(obj)
   // console.log(objValues)

    // filter()
    let oddNumericValues=objValues.filter((element)=>typeof element==="number" && element%2!==0)
   // console.log(oddNumericValues)

    // reduce()
    let sum=oddNumericValues.reduce((acc,cv)=>acc+cv,0)
    console.log(sum)    
}
sumOddNumericsValues({ a: 1, b: 2, c: 'text', d: 3, e: 8 })
sumOddNumericsValues({ x: 11, y: 'hello', z: 7, w: 4 })
sumOddNumericsValues({ m: 101, n: 200, o: 'JS', p: true, q: 9 })


