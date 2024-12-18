// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉  
// It’s Day 61 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// Today’s challenge is to sort an array in descending order without using inbuilt methods like `sort()`.

// 🔥 Problem Statement:  
// Write a JavaScript function to sort an array in ascending order without any inbuilt sorting methods.  

// 📝 Input Example:  
// Input: [6, 1, 5, 2, 4, 3]  
// Output: [1, 2, 3, 4, 5, 6]  

// 🚀 Approach:  
// In **Day 60**, we solved a similar challenge where we sorted an array in **descending order**.  
// Today, we’ll reverse that logic to sort the array in **ascending order**:  
// 1️⃣ Use nested loops to compare each element with every other element in the array.  
// 2️⃣ If a **larger number is found**, swap the two elements to ensure the smaller one comes first.  
// 3️⃣ Continue this process until the array is fully sorted in ascending order.   

// 🛠️ Code Implementation:  
function sortArray(arr){
    console.log(`Before Sorting`,arr)
     for(let i=0;i<arr.length;i++){// i=1 ||i=2
         for(j=i;j<arr.length;j++){
             //j=0 || j=1 || j=2 ... j=5  || j=6 fail >> termination
             //console.log(`i=${i} , j=${j} , arr[i]=${arr[i]} ,arr[j]=${arr[j]}`)
            // console.log(`${arr[i]} < ${arr[j]} = ${arr[i] <arr[j]}`)
             if(arr[i]>arr[j]){
                // console.log(` Inside -  i=${i} , j=${j} , arr[i]=${arr[i]} ,arr[j]=${arr[j]}`)
                 //swapping
               //  console.log(`Before Swapping [${arr}]`)
                 let temp=arr[i];  //temp=1
                 arr[i]=arr[j];    //arr[i]=5
                 arr[j]=temp;       //arr[j]=1
                // console.log(`After Swapping [${arr}]`)   
             }
         }
        // console.log(`J loop ends and i loop starts`)
 
     }
     console.log(`After Sorting`,arr)
 }
 sortArray([6, 1, 5, 2, 4, 3])
 sortArray([90,77,100,450])

// 🎉 Key Takeaways:  

// - In **Day 60**, we ensured that larger elements moved to the front of the array for descending order.  
// - Today, we reversed that logic to sort smaller elements to the front for ascending order.  

// 📝 Comparison of Approaches:  
// - **Descending Order (Day 60):** Swap if `arr[i] < arr[j]`.  
// - **Ascending Order (Day 61):** Swap if `arr[i] > arr[j]`.  

// - Sorting algorithms like this use pairwise comparisons and swaps to organize data.  
// - This is a simplified version of the **bubble sort** algorithm.  
// - It's important to understand such fundamentals before using built-in methods.  

// 🌟 Pro Tip:  
// When solving problems like this, break the process into smaller steps.  
// Use `console.log` strategically to debug and understand how the array changes during each iteration.  

// 🚀 That’s all for today’s challenge!  
// Join us tomorrow for another exciting day of coding as we tackle Day 62. Keep learning and keep growing! 🌟
//Dont forget to like, share, and subscribe to my channel for more exciting content! Stay tuned for the Day 62 challenge coming soon!
