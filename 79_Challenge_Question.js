// Write a JavaScript function that swaps the keys and values of an object.  

// Example:  
// ✅ Input: { a: 1, b: 2, c: 3 }  
// ✅ Output: { '1': 'a', '2': 'b', '3': 'c' }  

// ✅ Input: { apple: 'fruit', carrot: 'vegetable' }  
// ✅ Output: { fruit: 'apple', vegetable: 'carrot' }

// JavaScript function      >>swapKeysAndValues()
// swaps the keys and values of an object

// Approach:
// swapped={} >>store swapped keys and values 
// loop >>for of 
// Object.entries() >>array >>[key,value] pair
// obj={ a: 1, b: 2, c: 3 }     >>Object.entries(obj)
// [["a",1],["b",2],["c",3]]
// Destructing 
// const [key,value]=["a",1]  >>key=a value=1
// const [key,value]=["b",2]  >>key=b value=2
// const [key,value]=["c",3]  >>key=c value=3

// for(const [key,value] of Object.entries(obj)){
    // swapping >>asssignment
    // swapped[value]=key;
// }

// Print >> swapped 

function swapKeysAndValues(obj){
    //console.log(obj)
    let swapped={}
    //console.log(Object.entries(obj))

    for(const [key,value] of Object.entries(obj)){
       // console.log(key,value)
        swapped[value]=key
    }
    console.log(swapped)
}
swapKeysAndValues({ a: 1, b: 2, c: 3 })
swapKeysAndValues({ apple: 'fruit', carrot: 'vegetable' })


