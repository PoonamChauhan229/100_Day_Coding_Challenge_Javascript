// Write a JavaScript function that takes an object and converts it into a query string format.

// 📦 **Input:** { name: "Alice", age: 25}  
// 📦 **Output:** "name=Alice&age=25"

// 📦 **Input:** { isActive: true, score: 95, email: "john229@example.com" }  
// 📦 **Output:** "isActive=true&score=95&email=john229%40example.com"

// 📦 **Input:** { firstName: "John", lastName: "Doe", city: "New York" }  
// 📦 **Output:** "firstName=John&lastName=Doe&city=New%20York"

// JavaScript function         >>objectToQueryString()
// object and converts it into a query string format.

// { name: "Alice", age: 25}  >>"name=Alice&age=25"

// { isActive: true, score: 95, email: "john229@example.com" }
// "isActive=true&score=95&email=john229%40example.com"

// { firstName: "John", lastName: "Doe", city: "New York" } 
// "firstName=John&lastName=Doe&city=New%20York"


// Approach:
// Extract Keys Object
// Object.keys() >>returns all keys >>[] >> object
// obj={ name: "Alice", age: 25}
// Object.keys(obj)
// ["name","age"]    >>objKeys

// key=value   ||map()
// arr.map(cbk function)
// objKeys.map((element)=>`${element}}=${obj[element]}`)     key=value || element=obj[element]
// ["name=Alice","age=25"]

// encodeURIComponent()
// objKeys.map((element)=>`${encodeURIComponent(element)}}=${encodeURIComponent(obj[element])}`) 
// >>query

// queryString  >>join("&")
// query.join("&")
// name=Alice&age=25

// queryString >>Print


function objectToQueryString(obj){
    //console.log(obj)

    let objKeys=Object.keys(obj)
   // console.log(objKeys)

    let query=objKeys.map((element)=>`${encodeURIComponent(element)}=${encodeURIComponent(obj[element])}`)

   // console.log(query)

    let queryString=query.join("&")
    console.log(queryString)

}
objectToQueryString({ name: "Alice", age: 25} )
objectToQueryString({ isActive: true, score: 95, email: "john229@example.com" })
objectToQueryString({ firstName: "John", lastName: "Doe", city: "New York" } )
