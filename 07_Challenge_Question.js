// Write a JavaScript function that takes a number and prints its multiplication table from 1 to 10/12.

// JavaScript function                       >> generateTable()
// number and prints its multiplication table
// 1 to 10/12.
// 2
// 2*1=2 ||2*2=4 .....2*10=20 2*12=24
// for loop >> i=1; i<=10 || i<=12


function generateTable(number){
    console.log(`Table of`,number)
        for(let i=1;i<=10;i++){
    // for(let i=1;i<=12;i++){
        console.log(`${number} x ${i} =`,number*i)
    }
}
generateTable(2)
generateTable(5)





