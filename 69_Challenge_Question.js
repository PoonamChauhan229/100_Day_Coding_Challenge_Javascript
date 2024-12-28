// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 69 of our 100 Days of Coding Challenge in JavaScript.

// A person saves his monthly saving according to given schema. He saves same amount of money which is equal to the money saved in immediate previous two months. Assume, initially he saved 1000 rupees and in first month he saved another 1000. Your task is to tell how much he had totally saved at the end of ‘n’ months

// the amount saved is the sum of the savings of the previous two months.
// Person >saving > 1000
// m1=1000                             >>1000+saving >>1000+1000  >>2000
// m2=m1 >>2000                        >>2000+saving >>2000+2000 >>4000
// m3=m1+m2 >>1000+2000                >>1000+2000+saving >>1000+2000+4000 >>7000
// m4=m2+m3 >>2000+3000                >>2000+3000+saving >>2000+3000+7000 >>11000

// Approach:
//amount=0
// loop
// amount+=firstmonth*i     
// i=1 1000+1000 >>2000
// i=2 1000+2000 >>3000+1000 >>4000
// i=3 3000+3000 >>6000+1000 >>7000
// i=4 6000+4000 >>10000+1000 >>11000

function totalSaving(n){
    let firstmonth = 1000; 
    let saving = 1000;
    let amount=0;


for (let i = 1; i <=n; i++) {
 amount=amount+firstmonth*i
 console.log("i=",i,amount)
}
// console.log(n,amount,saving)
//  console.log(amount+saving)

}  
totalSaving(1)
totalSaving(2)
totalSaving(3)
totalSaving(4)