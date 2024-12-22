// Write a JavaScript function to find the minimum value in every sliding subarray of size `k`.  

// 📝 Input Example:  
// Input Array: [1, -2, -3, -4, 5, 6, -7]  
// k = 3  
// Output: [-3, -4, -4, -4, -7]  


//JS Function                               >> findMinInSubArray()
//find the minimum value in every sliding subarray of size `k`

//Approach:
//nested loop >> i loop >> j loop 
// i loop >> 5 times >> 5 subarray
// result=[]
//for(let i=0;i<=arr.length-k;i++)   >>7-3=4{
    // for(let j=i;j<i+k)//subarray >>3 >> 3 times
    // i=0 j=0 j<0+3=3 0-2   >> 3times
    // i=1 j=1 j<1+3=4 1-3   >> 3times
    // i=2 j=2 j<2+3=5 2-4   >> 3times
    // i=3 j=3 j<3+3=6 3-5   >> 3times
    // i=4 j=4 j<4+3=7 4-6   >> 3times
    // i=5 loop terminate

    //Find min val subarray
    //temp=[] >> subarray store >> pushMethod
    //Math.min(...temp)   >> minVal
    // result.push(minVal)
    // }
    // result >> Min val >> Final output

    function findMinInSubArray(arr,k){
       // console.log(arr,k)
        //nested loop
        let result=[]
        for(let i=0;i<=arr.length-k;i++){
            // console.log("I",i) 
            let temp=[]
            for(j=i;j<i+k;j++){
                // console.log("J",j)   
                temp.push(arr[j])            
            }
           // console.log(temp)
            const minVal=Math.min(...temp)
           // console.log(minVal)
            result.push(minVal)
        }
        console.log(`Minimum values of Subarray:`,result)
    }
    findMinInSubArray([1, -2, -3, -4, 5, 6, -7],3)