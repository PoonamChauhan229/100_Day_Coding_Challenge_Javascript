// 🎉 Hey everyone, welcome back to Code with Poonam! 🎉  
// It’s Day 60 of our 100 Days of Coding Challenge in JavaScript! 🚀  

// Today’s challenge is all about sorting an array in descending order without using any inbuilt methods.

// 🔥 Problem Statement:
// Write a JavaScript function to sort an array in descending order without using inbuilt methods.

// 📝 Input Example:
// Input: [6, 1, 5, 2, 4, 3]  
// Output: [6, 5, 4, 3, 2, 1]  

// 🚀 Approach:
// 1️⃣ Use nested loops to compare each element of the array with the others.
//  Since we want to comapare each element with every other element, we need to use a nested loop.
// for(let i=0;i<arr.length;i++){
// j starts from i because we don't want to compare an element with itself
//     for(let j=i;j<arr.length;j++){ 
            // if(arr[i]<arr[j]){
               //swapping
           // }
         // }
       // }

// 2️⃣ If a smaller number is found, swap the two elements to ensure the larger one comes first.
// 3️⃣ Continue the process until the entire array is sorted in descending order.

let arr1=[6,1,5,2,4,3];
function sortarray(arr){
    let temp;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            console.log(`i=${i},j=${j},arr[i]=${arr[i]},arr[j]=${arr[j]}`);

            console.log(`${arr[i]} < ${arr[j]} = ${arr[i]<arr[j]}`);  
            // Descending Order          
            if(arr[i]<arr[j]){
                console.log(`Inside= i=${i},j=${j},arr[i]=${arr[i]},arr[j]=${arr[j]}`);
                console.log(`Before swapping = ${arr}`);
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                console.log(`After swapping = ${arr}`);
            }            
        }
        console.log(`J loop ends here and again i loop starts`);
    }
   console.log(arr)
}
sortarray(arr1)

// 🎉 Explanation of Output:
// For the input [6, 1, 5, 2, 4, 3]:
// - Elements are compared pairwise using nested loops.
// - If the first element is smaller than the second, they are swapped.
// - This process is repeated until the array is sorted in descending order.
// Final result: [6, 5, 4, 3, 2, 1].

// 🌟 Why is this challenge important?
// - Helps in understanding sorting algorithms and the logic behind them.
// - Reinforces the use of nested loops, conditional statements, and variable swapping.

// 💡 Tip of the Day:
// Debugging is key! Use `console.log` statements wisely to track the progress of your loops and variables during execution.

// 🚀 That’s it for today! Keep challenging yourself. See you tomorrow for Day 61 Challenge!

