// Write a JavaScript function that reverses the order of keys and values in an object.  

// Input >> {a: 1, b: 2, c: 3}
// Output >> {'1': 'a', '2': 'b', '3': 'c' }  

// JavaScript function           >>reverseKeysAndValues()
// reverses the order of keys and values

// Approach:
// For Of Loop ,Object.entries(),destructuring,swapping 
// reversedObj={} >>Store our Final Output.
// Object.entries()
// obj={a: 1, b: 2, c: 3}
// Object.entries(obj)
// [["a",1],["b",2],["c",3]]
// Destructuring:
// const[key,value]=["a",1] ===> key =a || value=1
// for Of loop
// for(const [key,value] of Object.entries(obj)){
    // swapping
    // reversedObj[value]=key
// }

// Print RESULT >>reversedObj

function reverseKeysAndValues(obj){
    //console.log(obj)
    
    let reversedObj={}

    for(const[key,value] of Object.entries(obj)){
        reversedObj[value]=key
    }
    console.log(reversedObj)
}
reverseKeysAndValues({a: 1, b: 2, c: 3})
reverseKeysAndValues({x:20,y:30})
