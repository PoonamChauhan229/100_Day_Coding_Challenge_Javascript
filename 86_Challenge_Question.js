// Write a function to return an array of objects containing both key and value pairs from an object.

// 📦 **Input:** { a: 1, b: 2, c: 3 }
// 📦 **Output:** [ { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } ]

// 📦 **Input:** { name: "John", age: 30, city: "New York" }
// 📦 **Output:** [ { key: 'name', value: 'John' }, { key: 'age', value: 30 }, { key: 'city', value: 'New York' } ]

// 📦 **Input:** {}
// 📦 **Output:** []

// JS Function            >>arrayOfObjects()
// return an array of objects containing both key and value pairs

// Approach:
// Object.entries() >>array of key value pair
// obj={ a: 1, b: 2, c: 3 }
// Object.entries(obj)
// objArr=[["a",1],["b",2],["c",3]]

// Map Method
// Syntax :arr.map((element,index,arr)=>{})

// result=objArr.map((element)=>({key:element[0],value:element[1]}))
// Print result 

// Destructring      >>[key,value]=["a",1]
// Object Short Hand
// key :value 
// name:name >>{name}

// objArr.map(([key,value])=>({key:key,value:value}))
// result2=objArr.map(([key,value])=>({key,value}))

// Print result2

function arrayOfObjects(obj){
   // console.log(obj)
    let objArr=Object.entries(obj)
   // console.log(objArr)

    // 1st way
    let result=objArr.map((element)=>({key:element[0],value:element[1]}))
    console.log("Result -1st way",result)

    // 2nd way
    let result2=objArr.map(([key,value])=>({key,value}))
    console.log("Result -2nd way",result2)
}
arrayOfObjects({ a: 1, b: 2, c: 3 })
arrayOfObjects({ name: "John", age: 30, city: "New York" })
arrayOfObjects({})









