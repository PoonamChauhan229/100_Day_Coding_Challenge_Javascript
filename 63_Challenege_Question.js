// Write a JavaScript function to find the maximum value in every sliding subarray of size `k`.

// Input Example:
// Input Array: [1, -2, -3, -4, 5, 6, -7]
// k = 3
// Output: [1, -2, 5, 6, 6]

//JS Function                        >>findMaxInSubArray()
//find the maximum value in every sliding subarray of size `k`

//Approach:
//nested loop >>2 loop >> i loop >> j loop 
//i loop
// 5 subarray >> 5 times || 0-4 
//for(let i=0;i<=arr.length-k;i++) //i<=4 ||7-3=4 ||
//j loop
//for(let j=i;j<i+k;j++)   i+3>> 0+3 =3 || i+k
//i=0 j=0 j<0+3=3 0-2 3times
//i=1 j=1 j<1+3=4 1-3 3times
//i=2 j=2 j<2+3=5 2-4 3times
//i=3 j=3 j<3+3=6 3-5 3times
//i=4 j=4 j<4+3=7 4-6 3times
//i=5 icondition >> fails >> terminate

//find the max value from subarray
//temp=[]>> elements of subarray >>push Method
// Math.max(...temp) >>maxVal
//result=[]
// result.push(maxVal)
//result >> Max val >> subarray 

function findMaxInSubArray(arr,k){
    //console.log(arr,k)
    let result=[]
    //nested loop
    for(let i=0;i<=arr.length-k;i++){
        let temp=[]
        for(j=i;j<i+k;j++){
            // console.log(`i:${i},j:${j}`)
            temp.push(arr[j])
        }
        //console.log(temp)
        const maxVal=Math.max(...temp)
       // console.log(maxVal)
        result.push(maxVal)
    }
    console.log(`Maximum values of Subarray:`,result)
}
findMaxInSubArray([1, -2, -3, -4, 5, 6, -7],3)
findMaxInSubArray([23,45,67,89],3)
findMaxInSubArray([78,45,78,90,34,23],4)
findMaxInSubArray([78,45,78,90,34,100],4)
