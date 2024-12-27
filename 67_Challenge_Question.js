// Write a JS Function to find the minimum element in an array without using sorting.

// 📝 **Input Example**: [3, 4, 9, 1, 6]
// 📝 **Output**: 1

// JS Function                 >>findMinElement()
// minimum element in an array without using sorting

// Approach:
// loop >>
// min=arr[0]
// i loop
// for(let i=1;i<arr.length;i++)
// condition arr[i]<min  >> true 
// update min variable >>min=arr[i] 

// i=1 4<3 >> false >> min=3
// i=2 9<3 >> false >> min=3
// i=3 1<3 >> true  >> min=1
// i=4 6<1 >> false >> min=1
// i=5 >>false >> terminate >> min=1 

function findMinElement(arr){
    // console.log(arr)
    let min=arr[0]
    for( let i=1;i<arr.length;i++){
        if(arr[i]<min){
            // console.log("true")
            min=arr[i]            
        }
    }
    console.log(`Minimum element in an array [${arr}] :`,min)
}
findMinElement([3, 4, 9, 1, 6])
findMinElement([67,100,56,78,90])