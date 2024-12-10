// Write a function that calculates the sum of all integers in a range [lower, upper].

// 💡 Example:
// Input: Lower Bound: 1, Upper Bound: 5  
// Output: 15 (1 + 2 + 3 + 4 + 5)

// Input: Lower Bound: 3, Upper Bound: 7
// Output: 25 (3 + 4 + 5 + 6 + 7)

//JS Function                                   >>sumOfRange()
//the sum of all integers in a range [lower, upper]

//Approach:
//Validate >>if(lower>upper) >>Error Message +Early Return 
//for loop >> start >>lower end >>upper 
//sum =0
//forloop>> for (let i=lower;i<=upper;i++)
//sum=sum+i

function sumOfRange(lower,upper){
    //console.log(lower,upper)
    if(lower>upper){
        console.log("Lower bound must be less than or equal to upper bound")
        return;
    }
    let sum=0;
    for(let i=lower;i<=upper;i++){
        sum=sum+i;
    }
    console.log(`The sum of all integers in a range [${lower}, ${upper}] : ${sum}`)
}
sumOfRange(1,5) //15
sumOfRange(3,7) //25
sumOfRange(5,5)//5
sumOfRange(10,2)//Error

