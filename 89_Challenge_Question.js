// Write a JavaScript function to calculate the sum of all even numeric values in an object.

// 📦 **Input:** { a: 1, b: 2, c: 'text', d: 3, e: 8 }  
// 📦 **Output:** 10  

// 📦 **Input:** { x: 10, y: 'hello', z: 5, w: 4 }  
// 📦 **Output:** 14  

// 📦 **Input:** { m: 100, n: 200, o: 'JS', p: true, q: 6 }
// 📦 **Output:** 306

// JavaScript function    >>sumEvenNumericValues()
// sum of all even numeric values in an object.

// Approach:
// Extract Values
// Object.values() >>array of value of object
// obj={ a: 1, b: 2, c: 'text', d: 3, e: 8 } 
// Object.values(obj)>>[1,2,"text",3,8] >>objValues

// Extract even numeric values >>filter()
// arr.filter(cbk function)>>condition >>passes >>[] true values >>elements of that array
// objValues.filter(()=>)
// condition >> 
// numerical value check >>typeof element ==="number"
// even value check >>element %2==0
// && operator
// objValues.filter((element)=>typeof element ==="number" && element%2==0)
// [2,8] >>evenNumericValues

// Calculate the sum >>reduce()
// arr.reduce((acc,cv)=>acc+cv,initialvalue)
// evenNumericValues.reduce((acc,cv)=>acc+cv,0)

// initialvalue=0 ||acc=0 ||[2,8]
// acc=0 cv=2 >>acc+cv =0+2 =2
// acc=2 cv=8 >>acc+cv =2+8 =10 >>Sum

// Print Sum >>Final Output 

function sumEvenNumericValues(obj){
  //console.log(obj)
  // Extract Value
  let objValues=Object.values(obj)
  //console.log(objValues)

  // Extract even numeric values 
  let evenNumericValues=objValues.filter((element)=>typeof element ==="number" && element%2==0)
  //console.log(evenNumericValues)

  //Calculate the sum
  let sum=evenNumericValues.reduce((acc,cv)=>acc+cv,0)
  console.log(sum)
}
sumEvenNumericValues({ a: 1, b: 2, c: 'text', d: 3, e: 8 })
sumEvenNumericValues({ x: 10, y: 'hello', z: 5, w: 4 }  )
sumEvenNumericValues({ m: 100, n: 200, o: 'JS', p: true, q: 6 })

