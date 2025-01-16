// Write a JS function to create a function to find the sum of all odd numeric values in an object.

function sumNumericValues(obj) {
    let ObjArr=Object.values(obj)
    console.log(ObjArr)
    let numericRes=ObjArr.filter((element)=> typeof element ==="number" && element%2!==0)
    console.log(numericRes)
    let sum=numericRes.reduce((acc,cv)=>acc+cv,0)
    console.log(sum)
  
  }
  
  // Example usage:
  const obj = { a: 1, b: 2, c: 'text', d: 3,e:8 };
  const sum = sumNumericValues(obj);
  console.log(sum); // Output: 6