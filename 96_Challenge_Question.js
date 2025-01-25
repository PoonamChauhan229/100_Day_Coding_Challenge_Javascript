// Write a class to manage user registration and ensure the unique validation of a username.

// A method should logs
// >>User name already exists .Please choose a different username (if registered)
// >> User registered suceessfully  (if not registered)

// class                                        >>UserRegistration
// ensure the unique validation of a username   >>register()
// show all registered users                    >>showUsers()

// Approach:
// class UserRegistration{}
// constructor(){
    // this.users=[] >>store users >>array of objects
// }

// methods >>
// register(username,password){
    // check for username >> exists || doesnt exists
    // exists        >> dont add to users array
    // doesnt exists >>add to users array

    // if condition
    // some() >>at least 1 element >> meets a specified condition || boolean value

    // if(this.users.some((element)=>element.username===username)){
        // Log >>User name already exists .Please choose a different username 
    // }else{
            //push >> add the element >> end of array
            // this.users.push({username:username,password:password})
            // this.users.push({username,password})
            // Log >> User registered suceessfully 
    // }
       
// }

// showUsers(){
    // Print >> this.users
// }

// Create an instance of UserRegistration class
// let registrationSystem= new UserRegistration()

// registrationSystem.register("oswald","1234")
// registrationSystem.register("wini","5678")
// registrationSystem.register("oswald","1234")

// registrationSystem.showUsers()


class UserRegistration{
    constructor(){
        this.users=[]
    }

    register(username,password){
        if(this.users.some((element)=>element.username===username)){
            console.log("User name already exists .Please choose a different username ")
        }else{
            this.users.push({username,password})
            console.log("User registered suceessfully ")
        }
    }
    showUsers(){
        console.log(this.users)
    }
}

let registrationSystem=new UserRegistration()
// console.log(registrationSystem)

registrationSystem.register("oswald","12345")
registrationSystem.register("wini","5678")
registrationSystem.register("oswald","12345")

// registrationSystem.showUsers()
registrationSystem.register("code with poonam","5678")
registrationSystem.showUsers()








