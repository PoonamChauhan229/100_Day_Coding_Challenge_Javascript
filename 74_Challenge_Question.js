//Write a Javascript Function to find the common keys and their values in two objects.

// 🧩 **Input Example**:  
// 1️⃣ Input:  
// const obj1 = { a: 1, b: 2, c: 3 };  
// const obj2 = { b: 2, c: 3, d: 4 };  
// Output: { b: 2, c: 3 }

// JS Function            >>findCommonKeysValues()
// find the common keys and their values in two objects.

// Approach:
// loop >>
// for in loop >>
// for(let key in obj){}
// key >>a,b,c  || b,c,d
// for(let key in obj1){}
// key >>obj1 >> check existence in obj2

// 1st check
// hasOwnProperty(key) >>True || False >>Boolean Values
// obj1.hasOwnProperty(key)  >>True || False
// obj2.hasOwnProperty(key)  >>True || False

// 2nd check
// compare >>obj1[key]===obj2[key] >>True || False

// if condition --- && operator
// if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key]===obj2[key])
// true >>key:value >>new obj
// commonKeys={}

// commonKeys >>Print


function findCommonKeysValues(obj1,obj2){
   // console.log(obj1,obj2)
    const commonKeys={}
    for(let key in obj1){
       // console.log(key)
        if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key]===obj2[key]){
          //  console.log(true)
            commonKeys[key]=obj1[key]
        }
    }
    console.log(commonKeys)

}
const obj1 = { a: 1, b: 2, c: 3 };  
const obj2 = { b: 2, c: 3, d: 4 };  
findCommonKeysValues(obj1,obj2)
findCommonKeysValues({z:20,f:80},{f:80})

 
