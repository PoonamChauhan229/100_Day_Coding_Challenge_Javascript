// Write a JavaScript function that merges two objects, combining all their properties.

// JavaScript function                               >>mergeObjects()
// merges two objects, combining all their properties


//Spread Operator (...) >>Spread all the properties of an obj
//{a:1,b:30},{c:56,d:45}
//{a:1,b:30,c:56,d:45}

// {...obj1,...obj2} >> constructs a new obj >> initially obj empty
//{a:1,b:30,c:56,d:45}

function mergeObjects(obj1,obj2){
   // console.log(obj1,obj2)
    const merged={...obj1,...obj2}
    console.log("Merged Object:",merged)
}
mergeObjects({a:1,b:30},{c:56,d:45})
mergeObjects({x:67,y:89},{name:"Object",g:90})