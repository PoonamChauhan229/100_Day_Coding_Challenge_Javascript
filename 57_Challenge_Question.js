// Write a JS Function to encode a string based on character frequency.

// Example:  

// Input: "aaabbc"  
// Output: "a3b2c1"  

// Input: "abc"  
// Output: "a1b1c1"

// JS Function                                >>encodeString()
// encode a string based on character frequency

//Approach:
//split("") >>["a","a","a","b","b","c"] >>arr
//obj={}
//for loop >> if condition 
//for(let i=0;i<arr.length;i++){}
//if(obj[arr[i]])>> increment by 1 else obj[arr[i]]=1 >>{a:3, b:2,c:1}

//for in loop
// for(let key in obj){console.log(key,obj[key])}

function encodeString(str){
    //console.log(str)
    let arr=str.split("")
    //console.log(arr)
    let obj={}
    let resultStr=""

    for(let i=0;i<arr.length;i++){
        let char=arr[i]
       // console.log(char)
        if(obj[char]){
            obj[char]++
        }else{
            obj[char]=1
        }
    }
    //console.log(obj)

    for(let key in obj){
        //console.log(key,obj[key])
        resultStr+=key+obj[key] // concat
    }
    console.log(`Encoded String ${str} : `,resultStr)

}
encodeString("aaabbc")
encodeString("abc")