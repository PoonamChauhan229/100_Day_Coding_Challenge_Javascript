// Write a JS function to calculate the prefix sum array of a given array.

// 🧩 **Input Example**:  
// 1️⃣ Input: [2, 4, 4, 2] → Output: [2, 6, 10, 12]  


// JS Function                    >>prefixSum()
// calculate the prefix sum array of a given array.

// [2, 4, 4, 2]   || [2, 6, 10, 12] 
// 2
// 2+4=6
// 2+4+4=10
// 2+4+4+2=12

// Approach:
// loop >>i loop
// start =0||end =arr.length-1
// sumPrefix=[] >>store the prefix sume
// sum=0; ||accumulation 
// for(let i=0;i<arr.length;i++){
    // calculate the sum -accumulate + push to the resulatant arry 
    // sum+=arr[i] ||sum=sum+arr[i]
    // pushMethod 
    // sumPrefix.push(sum)
// }
// Print >> sumPrefix

// Iterations
// i=0 0<4>>T 0+2=2    sum=2  >>push >>[2]
// i=1 1<4>>T 2+4=6    sum=6  >>push >>[2,6]
// i=2 2<4>>T 6+4=10   sum=10 >>push >>[2,6,10]
// i=3 3<4>>T 10+2=12  sum=12 >>push >>[2,6,10,12]
// i=4 4<4>>F >>>>>>>fail >> termination 

// Print >> sumPrefix

function prefixSum(arr){
  //  console.log(arr)
    let sumPrefix=[]
    let sum=0;
    // i loop
    for(let i=0;i<arr.length;i++){
        // console.log(i)
        sum+=arr[i]
       // console.log(i,sum)
        sumPrefix.push(sum)
    }
    console.log(`Prefix sum array of an [${arr}]:`,sumPrefix)
}
prefixSum([2, 4, 4, 2])
prefixSum([10,20,30])
prefixSum([1,1,1,1])



















