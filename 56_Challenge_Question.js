// Write a JS function to calculate the average of all numbers in a given array.

// 💡 Example:

// Input: [10, 20, 30, 40, 50] 
// Output: 30  

// Input: [1, 2, 3, 4, 5]  
// Output: 3  


// JS Function                    >>calculateAverage()
// the average of all numbers

//Approach:
// reduce() >> array Method >> accumulated value
// reduce((acc,cv)=> calculation)  >>acc+cv
//acc =10 cv 20  >>30
//acc =30 cv 30  >>60
//acc =60  cv 40  >>100
//acc =100 cv 50  >> 150
// sum 

//.length
//  sum/arr.length >> average 

function calculateAverage(arr){
   //console.log(arr)

    const sum=arr.reduce((acc,cv)=>acc+cv)
   // console.log(sum)

    const avg=sum/arr.length;
    console.log(`The average of an array [${arr}] is : `,avg)

}
calculateAverage([10, 20, 30, 40, 50])
calculateAverage([1, 2, 3, 4, 5])