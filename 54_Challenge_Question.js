// Write a function to find the square of each element in a given array 

// 💡 Example:
// Input: Array: [1, 2, 3, 4]
// Output: [1, 4, 9, 16]

//JS Function               >>findSquare()
//the square of each element

//Approach:
//map((element)=>{calculation})
//1st way:
// 2*2  >> element*element

//2nd way:
// Math.pow() >>x=element y=2 >>Math.pow(element,2)

function findSquare(arr){//params
   // console.log(arr)

   //1st way
   const squareNormal=arr.map((element)=>element * element)
    console.log(`Squares using normal multiplication : `,squareNormal)

    const squareMath=arr.map((element)=>Math.pow(element,2))
    console.log(`Squares using Math.pow() : `,squareMath)
}
findSquare([1, 2, 3, 4])//args
findSquare([10,20,30])
