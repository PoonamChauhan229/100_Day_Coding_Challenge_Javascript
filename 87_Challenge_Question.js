// Write a function to create an object with keys as numbers and values as their squares.

// 📦 **Input:** 2  
// 📦 **Output:** { 1: 1, 2: 4 }

// 📦 **Input:** 4  
// 📦 **Output:** { 1: 1, 2: 4, 3: 9, 4: 16 }

// 📦 **Input:** 6  
// 📦 **Output:** { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36 }

// JS Function             >>createSquareObjects()
// create an object with keys as numbers and values as their squares.
// 2:2*2 >>2:4
// 5:5*5 >>5:25

// Approach:
// result={} >> store key value pair
// for loop
// start >>1  ||end  >>n
// for(let i=1;i<=n;i++){
    // result[i]=i*i
// }
// n=3
// {1:1,2:4,3:9}

// Print result >>Final Object

function createSquareObjects(n){
   // console.log(n)
    let result={}

    for(let i=1;i<=n;i++){
        //console.log(i,i*i)  
        result[i]=i*i      
    }
    console.log(result)
}
createSquareObjects(2)
createSquareObjects(4)
createSquareObjects(6)