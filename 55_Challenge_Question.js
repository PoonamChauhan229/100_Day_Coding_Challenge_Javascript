// Write a function to calculate the product of all numbers in an array using JavaScript.

// 💡 Example:
// Input: Array: [2, 3, 4]
// Output: 24

// Input: Array: [1, 2, 3, 4, 5]
// Output: 120

// JS Function                           >>findProduct()
// the product of all numbers in an array

//Approach:
//reduce((acc,cv)=> calculation) >> accumulated value
// [2, 3, 4]
// acc =2  cv=3    >>acc*cv
// 2*3 =6 || acc=6 cv =4
// 6*4 =24 >> Product 24

// [1, 2, 3, 4, 5]
// acc =1  cv =2   >> acc * cv
// 1*2 >>2   || acc=2 cv=3
// 2*3 >>6   || acc=6 cv=4
// 6*4 >>24  || acc=24 cv=5
// 24*5 >>120 >> Product >>120

function findProduct(arr){
    //console.log(arr)
    // reduce
    const product=arr.reduce((acc,cv)=>acc*cv)
    console.log(`The product of an array [${arr}] is :`,product)
}
findProduct([2, 3, 4])
findProduct([1, 2, 3, 4, 5])
