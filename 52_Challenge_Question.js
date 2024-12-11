// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Write an JS Function to find the area of the equilateral triangle.

// Input Description:
// The side of an equilateral triangle is provided as the input.

// Output Description:
// Find the area of the equilateral triangle and print the answer up to 2 decimal places after rounding off.

// Sample Input :
// 20

// Sample Output :
// 173.21


// JS Function                                 >> areaEquilateralTriangle()
// find the area of the equilateral triangle   >> ¼(√3a2)

//Approach:
// ¼(√3a2)
//Math Methods
//Math.sqrt()  >>Math.sqrt(3)
//Math.pow()   >>Math.pow(side,2) >>Math.pow(a,2)
//toFixed()    >>result.toFixed(2)


function areaEquilateralTriangle(side){
   // console.log(side)
    //¼(√3a2)
    const findSqrt=Math.sqrt(3)
   // console.log(findSqrt)

    const findPow=Math.pow(side,2)
    //console.log(findPow)

    const area=1/4*(findSqrt*findPow)
   // console.log(area)
    
    const areaRounded=area.toFixed(2)
    console.log(`Area of the equilateral triangle with side ${side}: ${areaRounded}`)

}
areaEquilateralTriangle(20)
