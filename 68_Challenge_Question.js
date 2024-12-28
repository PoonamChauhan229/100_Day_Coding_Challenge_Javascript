// Write a JS Function to find the maximum element in an array without using sorting.

// 📝 **Input Example**: [3, 4, 9, 1, 6]
// 📝 **Output**: 9

// JS Function                     >>findMaxElement()
// maximum element in an array without using sorting

// Approach:
// loop >>
// max =arr[0]
// i loop
// for(let i=1;i<arr.length;i++){
// Compare >>each element with max 
// if condition >> arr[i]>max >> true >> update max variable
// max=arr[i]
// }

// i=1 4>3 >>true >>max=4
// i=2 9>4 >>true >>max=9
// i=3 1>9 >>false >> ---
// i=4 6>9 >>false >> ---
// i=5 >> false >> terminate

function findMaxElement(arr){
    // console.log(arr)
    let max=arr[0]
    //loop
    for(let i=1;i<arr.length;i++){
        // console.log(i)
        // comparision check
        if(arr[i]>max){
            // console.log("true")
            max=arr[i]
        }
    }
    console.log(`Maximum Element in that array [${arr}]:`,max)
}
findMaxElement( [3, 4, 9, 1, 6])
findMaxElement([100,200,500,67])


