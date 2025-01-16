// Write a JavaScript function to calculate the sum of all numeric values in an object.

// 📦 **Input:** { a: 1, b: 2, c: 'text', d: 3 }  
// 📦 **Output:** 6  

// 📦 **Input:** { x: 10, y: 'hello', z: 5 }  
// 📦 **Output:** 15  

// 📦 **Input:** { m: 100, n: 200, o: 'JS', p: true }
// 📦 **Output:** 300

// JavaScript function                >>sumNumericValues()
// the sum of all numeric values in an object.

// Approach:
// Extract Values >>Object.values() >>return an array of values of object
// Object.values()
// obj={ a: 1, b: 2, c: 'text', d: 3 } 
// Object.values(obj) >>[1,2,"text",3] >>objArr

// Extract Numeric Values >>Filter Method
// arr.filter(cbk function) >>passes test >> true value array
// objArr.filter((element)=>typeof element == "number") >>test >>[1,2,3]
// numericValues

// Calculate the sum >>Reduce Method
// arr.reduce((acc,cv)=>acc+cv,initialValue) >>initialValue=0
// numericValues.reduce((acc,cv)=>acc+cv,0) >>6

// [1,2,3] , initialValue=0
// acc=0 || cv=1  >>acc+cv >>0+1 >>1 
// acc=1 || cv=2  >>acc+cv >>1+2 >>3
// acc=3 || cv=3  >>acc+cv >>3+3 >>6
// 6 >> Sum

// Print Sum >> Final Output

function sumNumericValues(obj){
  //console.log(obj)
  // Extract Values
  let objArr=Object.values(obj)
 // console.log(objArr)

  // Extract Numeric Values >>filter()
  let numericValues=objArr.filter((element)=>typeof element == "number")
 // console.log(numericValues)

  // Calculate the Sum >>reduce()
  let sum=numericValues.reduce((acc,cv)=>acc+cv,0)
  console.log(sum)

}
sumNumericValues({ a: 1, b: 2, c: 'text', d: 3 })
sumNumericValues({ x: 10, y: 'hello', z: 5 })
sumNumericValues({ m: 100, n: 200, o: 'JS', p: true })










