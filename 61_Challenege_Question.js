// Write a JavaScript function to sort an array in ascending order without any inbuilt sorting methods.  

// 📝 Input Example:  
// Input: [6, 1, 5, 2, 4, 3]  
// Output: [1, 2, 3, 4, 5, 6]  

//JS Function                     >>sortArray()
//sort an array in ascending order

//Approach:
//nested for loop >> i loop >> j loop 
//for(let i=0;i<arr.length;i++){
    //for(let j=i;j<arr.length;j++){
        // compare + sorting
        //ascending order
        // i value > j value
       //if(arr[i]>arr[j]){
            //swap >> temp ,arr[i] ,arr[j]
            // temp=arr[i]
            // arr[i]=arr[j]
            //arr[j]=temp
       //    }
      
// }

function sortArray(arr){
    console.log(`Before Sorting`,arr)
    for(let i=0;i<arr.length;i++){ // i=0 .... i=5 || i=6 fail(6<6)..terninate
        for(let j=i;j<arr.length;j++){// j=0...j=5 ||j=6(fail)<< terminate
            //console.log(`i=${i} , j=${j}, arr[i]=${arr[i]}, arr[j]=${arr[j]}`)
            //comparing +swap >> sorted array
            if(arr[i]>arr[j]){
                //swap logic
               // console.log(`Inside - i=${i} , j=${j}, arr[i]=${arr[i]}, arr[j]=${arr[j]}`)
                //console.log( `Before Swapping`,arr)
                //arr[i]=6, arr[j]=1
                let temp=arr[i]; //temp =6
                arr[i]=arr[j];//arr[i]=1
                arr[j]=temp;//arr[j]=6
               // console.log( `After Swapping`,arr)
            }
        }
    } 
    console.log("Sorted Array",arr)  
}
sortArray([6, 1, 5, 2, 4, 3])
sortArray([56,90,2,13])
