// Using the method of looping, write a program to print the table of 9 till N in the format as follows:
// (N is input by the user)

// 9 18 27...

// Print NULL if 0 is input


// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the table of nine with single space between the elements till the number that is input.
// For example:
// Input: `3`
// Output: `9 18 27`

// JS Function                >>printTableNine()
// print the table of 9 till N
// Print NULL if 0 is input

//Approach:
//for loop >> start >>1 end 3 i++
// (let i=1;i<=N;i++){// 9*i}
//i=1;i<=3;i++ >>9*i >>9*1=9
//i=2;i<=3;i++ >>9*i >>9*2=18
//i=3;i<=3;i++ >>9*i >>9*3=27
//i=4;i<=3 >>loop will terminate

//[]>>push()>>add up the elemnt at the end >>[9,18,27]
//Spread Operator >>(...[]) >>Spread out the elements of the array
//join Method  >>[].join(" ")>>Bring together the elements of the array

// Print NULL if 0 is input
//early return
// if(N<=0){NULL return;}

function printTableNine(N){
 // console.log(N)
 if(N<=0){
  console.log("Null")
  return;//early return
 }
  const table=[]
  for(let i=1;i<=N;i++){
   // console.log(i,9*i)
    table.push(9*i)
  }
 // console.log(table)
  //Spread Operator
  console.log("Table of Nine using Spread Operator:",...table)
  //join Method 
  console.log("Table of Nine using join Method :",table.join(" "))
}
printTableNine(3)
printTableNine(0)
printTableNine(-5)
printTableNine(5)

