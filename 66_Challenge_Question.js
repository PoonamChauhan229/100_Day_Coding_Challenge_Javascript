// 📝 Write a JavaScript function to print the next smaller element for each element in the array. If no smaller element exists, print -1.

// 📝 INPUT: [10, 7, 9, 3, 2, 1, 15]
// 📝 OUTPUT: [7, 3, 3, 2, 1, -1, -1]

//JavaScript function          >>nextSmallerElement()
//print the next smaller element for each element in the array
//no smaller element exists, print -1

//Approach:
//nested loop >> i loop >> j loop
// i loop
// for(let i=0;i<arr.length;i++)
// j loop
// for(let j=i+1;j<arr.length;j++)
// i=0 j=1 ||10 - 7, 9, 3, 2, 1, 15 >>7
// i=1 j=2 ||7  -  9, 3, 2, 1, 15   >>3
// i=2 j=3 ||9  -  3, 2, 1, 15      >>3
// i=3 j=4 ||3  -  2, 1, 15         >>2
// i=4 j=5 ||2  -  1, 15            >>1
// i=5 j=6 ||1  -  15               >>-1
// i=6 j=7 ||15                     >>-1 >> (7<7) false 

// next smallest element
// if condition >>arr[j]<arr[i] >> break

// Print -1
// found=false 
// condition >>arr[j]<arr[i] >> true >> found=true 
// condition >>arr[j]<arr[i] >> false >>-1

// result =[]
// push Method >> true >> push >>next smallest element
// push Method >> false>> push >>-1
//  [7, 3, 3, 2, 1, -1,-1] >>final output


function nextSmallerElement(arr){
    let result=[]
    // console.log(arr)
    // nested loop
    for(let i=0;i<arr.length;i++){
        let found=false
        // console.log(`i:${i}`)
        for(let j=i+1;j<arr.length;j++){
            // console.log(`i:${i} j:${j} ${arr[j]}`)
            if(arr[j]<arr[i]){
                // push + result [] + flag=true >> break;
                result.push(arr[j])
                found=true
                break;
            }
        }
        if(!found){// found=false >>!false >> true 
            result.push(-1)
        }
    }
    console.log(`Next Smallest Element for each Element >`,result)
}
nextSmallerElement([10, 7, 9, 3, 2, 1, 15])




