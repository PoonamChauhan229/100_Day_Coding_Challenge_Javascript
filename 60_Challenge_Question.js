// Write a JavaScript function to sort an array in descending order without using inbuilt methods.

// 📝 Input Example:
// Input: [6, 1, 5, 2, 4, 3]  
// Output: [6, 5, 4, 3, 2, 1]  

// JS Function                     >>sortArray()
// sort an array in descending order

//Approach:
// nested for loop >>
// i loop >> j loop
// for(let i=0;i<arr.length;i++) >> 6 iterations{ i=6
    // for(let j=i;j<arr.length;j++){ >> sellect +compare 
    // i=6 || j=6 6<6 ||6<1 || 6<5 .....    
        // if(arr[i]<arr[j]) //ivalue <j value  {
        //swap >>temp varaible
        // }
    // }
// }


function sortArray(arr){
    console.log(`Before Sorting`,arr)
     for(let i=0;i<arr.length;i++){// i=1 ||i=2
         for(j=i;j<arr.length;j++){
             //j=0 || j=1 || j=2 ... j=5  || j=6 fail >> termination
             //console.log(`i=${i} , j=${j} , arr[i]=${arr[i]} ,arr[j]=${arr[j]}`)
            // console.log(`${arr[i]} < ${arr[j]} = ${arr[i] <arr[j]}`)
             if(arr[i]<arr[j]){
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

