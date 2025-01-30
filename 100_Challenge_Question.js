// Write a class that represents a shopping cart that can add, remove , calculate the total price and display the items Of the cart

// The class should include:
// A property items to store the cartItems
// A constructor() to initialize the items as an empty array.
// A method addItem(name, price, quantity) to add items to the cart.
// A method removeItem(name) to remove items from the cart.
// A method calculateTotal() to calculate the total price.
// A method showItems() to display all items in the cart.

// Approach:
// class ShoppingCart{}
// constructor(){
    // this.items=[] >>array of objectItems >>[{},{},{}]
// }

// methods
// addItem(name, price, quantity){
    //add items to the cart
    // check >> item >>existing >>increase the qunatity
    // find()
    // let existingItem=this.items.find((element)=>element.name===name)
    // not existing >> add items to the cart
    // if statement
    // if(existingItem){
        // increase the qunatity
        // existingItem.quantity+=quantity
    // }else{
        // add items to the cart
        // push Method
        // this.items.push({name, price, quantity})
    // }
// }

//  removeItem(name){
    // remove items from the cart
    // filter()
    // this.items=this.items.filter((element)=>element.name!==name)
// }

// calculateTotal(){
    // calculate the total price
    // reduce()
    // let totalPrice=this.items.reduce((acc,cv)=>acc+cv.price*cv.quantity,0)
    // Print >>totalPrice
 // }

// Iterations >>2 Items >>1st >>1.5 - 6    ||2nd >>2 - 2
// acc>>0 acc+cv.price*cv.quantity 0+1.5*6  >>9
// acc>>9 acc+cv.price*cv.quantity 9+2*2    >>13
// Print >>13

// showItems(){
    // display all items in the cart.
    // Print >> this.items
// }

// Create an Instance >> new keyword
// let cart=new ShoppingCart()
//  add >> 4 item || remove >>1 item >> TotalPrice >>ShowItems
// cart.addItem("Apple",1.5,6)
// cart.addItem("Banana",2,2)
// cart.addItem("Orange",4,5)
// cart.addItem("Apple",1.5,3)
// cart.removeItem("Banana")
// cart.calculateTotal()
// cart.showItems()

class ShoppingCart{
    constructor(){
        this.items=[]
    }

    addItem(name, price, quantity){
        let existingItem=this.items.find((element)=>element.name===name)
        if(existingItem){
            existingItem.quantity+=quantity
        }else{
            this.items.push({name, price, quantity})
        }

    }
    removeItem(name){
        this.items=this.items.filter((element)=>element.name!=name)
    }
    calculateTotal(){
        let totalPrice=this.items.reduce((acc,cv)=>acc+cv.price*cv.quantity,0)
        console.log("TotalPrice:",totalPrice)
    }
    showItems(){
        console.log(this.items)
    }

}

let cart=new ShoppingCart()
cart.addItem("Apple",1.5,6)
cart.addItem("Banana",2,2)
cart.addItem("Orange",4,5)
cart.addItem("Apple",1.5,3)
cart.showItems()
cart.removeItem("Banana")
cart.showItems()
cart.calculateTotal()