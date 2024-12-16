// Write a JavaScript function that swaps the values of two variables using destructuring assignment.  

// Example:
// Input: a = 5, b = 10  
// Output: a = 10, b = 5 

// JS function                       >>swapValues()
// swaps the values of two variables
// using destructuring assignment

//Approach:
//destructuring >>unpack the values
// const arr=[1,2,3]
// console.log(arr[0])//1 >> index number
// console.log(arr[2])

// const [a,b,c]=arr
// console.log(a,b,c)

// const arr1=[10,20,30]
// const [num1,num2,num3]=arr1 // [10,20,30]
// console.log(num1,num2)


//   a = 5, b = 10  
// const [a,b]=[b,a]    //[10,5]   || a=10 b=5

function swapValues(a,b){
    console.log(`Before Swap a = ${a} b = ${b}`);
    
    [a,b]=[b,a]
    
    console.log(`After Swap a = ${a} b = ${b}`);
}
swapValues(5,10)
swapValues(30,40)



