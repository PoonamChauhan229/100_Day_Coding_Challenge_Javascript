// A person saves his monthly saving according to given schema. He saves same amount of money which is equal to the money saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months

// JS Function                         >>totalSavings()
// He saves same amount of money which is equal to the money saved in immediate previous two months
// initially he saved 1000 rupees
// in first month he saved another 1000
// totally saved at the end of ‘n’ months

// Sample Input :
// 1
// Sample Output :
// 2000

// Input:
// 3
// Expected Output:
// 7000

// ___________________________________
// saving=1000
// 
// m1=1000                >>1000+saving=1000+1000  >>2000
// m2=2000                >>2000+saving=2000+2000  >>4000
// m3=m1+m2 >>1000+2000   >>3000+saving=3000+4000  >>7000
// m4=m2+m3 >>2000+3000   >>5000+saving=3000+7000  >>11000

// Approach:
// saving=1000
// firstmonth=1000
// amount=0

// loop >>1-n
// for(let i=1;i<=n;i++){
// amount+=firstmonth*i    ||amount=amount+firstmonth*i
// }
// amount+saving

// 1-4
// i=1 0+1000*1    >>1000   >>1000+saving >>1000+1000 >>2000
// i=2 1000+1000*2 >>3000   >>3000+saving >>3000+1000 >>4000
// i=3 3000+1000*3 >>6000   >>6000+saving >>6000+1000 >>7000
// i=4 6000+1000*4 >>10000  >>10000+saving >>10000+1000 >>11000


function totalSavings(n){
    // console.log(n)
    let saving=1000;
    let firstmonth=1000;
    let amount=0;

    for(let i=1;i<=n;i++){
        amount+=firstmonth*i
        // console.log(i,amount)
    }
    console.log(`Total Savings after ${n} months:`,amount+saving)
   }
totalSavings(1)
totalSavings(2)
totalSavings(3)
totalSavings(4)
totalSavings(12)
