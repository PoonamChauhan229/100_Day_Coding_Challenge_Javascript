// Hey Everyone,Welcome back to Code with Poonam

// Its the FinAL day of our 100 Days of Coding Challenge in Javascript! 🎉🔥 
// Can you believe it? We’ve made it all the way to Day 100! 💯💪
// And It was an incredible journey filled with learning, problem-solving, and mastering JavaScript concepts.

// 🚀 "In today's challenge, we’re going to build something super useful—a Shopping Cart System! 🛒✨ 
// Using JavaScript classes, we’ll add, remove, and calculate total prices efficiently.

// Today, we wrap up the challenge with one final project: A Shopping Cart System 🛒💰

// 🌟 **Today's challenge is about creating a ShoppingCart class**  
// We'll create a reusable class that can add items, remove items, calculate the total price, and display items in a shopping cart.  
// Let's dive in! 🚀


// Write a ShoppingCart class that uses the reduce method to calculate the total price of items in the cart. The class should include:

// A constructor to initialize the cart as an empty array.
// A method addItem(item, price, quantity) to add items to the cart.
// A method calculateTotal() that uses the reduce method to calculate the total price.
// A method showItems() to display all items in the cart.

// Approach:
// class ShoppingCart: A blueprint for creating shopping cart objects.
// constructor(): A special method that initializes a new instance of the class. It creates an empty array items to store the items in the cart.

// addItem()
// addItem(item, price, quantity): A method to add an item to the cart.
// Checks if the item already exists in the cart.
// Uses the find method to search for an item object in the items array with the same item name.
// let existingItemthis.items.find(element => element.item === item):

// Condition if (existingItem):
// If the item exists, its quantity is updated by adding the new quantity.
// if(existingItem){
//     existingItem.quantity += quantity;
// }else{
    // If the item doesn’t exist, a new object
    // push method
    // this.items.push({ item, price, quantity })
// }

// removeItem()
// removeItem(item): A method to remove an item from the cart.
// Filters out the item object from the items array using the filter method.
// this.items = this.items.filter(element => element.item !== item);

// calculateTotal()
// calculateTotal(): A method to calculate the total price of the items in the cart.
// Uses the reduce method to iterate over the items array and calculate the total price.
// let totalPrice= this.items.reduce((acc,cv) => acc + cv.price * cv.quantity, 0)

// Explanation  :
// Iteration    :
// acc>>0	cv.price >>1.5	cv.quantity>>6	cv.price * cv.quantity>>9 >> 9
// acc>>9	cv.price >>2	cv.quantity>>2	cv.price * cv.quantity>>4 >> 4


// showItems()
// showItems(): A method to show all items in the cart.
// Logs the items array to the console.
// this.items

// Create an Instance
// const cart = new ShoppingCart();
// cart.addItem('Apple', 1.5, 3);
// cart.addItem('Banana', 0.5, 5);
// cart.addItem('Orange', 2, 2);
// cart.addItem('Apple', 1.5, 3);
// cart.removeItem('Banana');
// cart.calculateTotal();
// cart.showItems();


class ShoppingCart {
    constructor() {
        this.items = []; // Initialize an empty array to store items
    }

    // Add item to the cart
    addItem(item, price, quantity) {
        const existingItem = this.items.find(element => element.item === item);
        if (existingItem) {
            existingItem.quantity += quantity; // If item exists, increase quantity
        } else {
            this.items.push({ item, price, quantity }); // Add new item
        }
    }

    // Remove item from the cart
    removeItem(item) {
        this.items = this.items.filter(element => element.item !== item); // Remove item by filtering out
    }

    // Calculate the total price of the items in the cart
    calculateTotal() {
        let totalPrice= this.items.reduce((acc,cv) => acc + cv.price * cv.quantity, 0)
        console.log("Total Price:",totalPrice)
    }

    // Show all items in the cart
    showItems() {
        console.log("Items in the cart:",this.items);
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem('Apple', 1.5, 3);
cart.addItem('Banana', 0.5, 5);
cart.addItem('Orange', 2, 2);
cart.addItem('Apple', 1.5, 3);

cart.showItems(); // Output: [ { item: 'Apple', price: 1.5, quantity: 3 }, { item: 'Banana', price: 0.5, quantity: 5 }, { item: 'Orange', price: 2, quantity: 2 } ]

cart.calculateTotal(); // Output: Total Price: 15.5

cart.removeItem('Banana');

cart.showItems(); // Output: [ { item: 'Apple', price: 1.5, quantity: 3 }, { item: 'Orange', price: 2, quantity: 2 } ]

cart.calculateTotal(); // Output: Total Price: 11

// So Thats all Guys 

// This marks the end of our 100 Days of JavaScript challenge! I just want to say a huge THANK YOU to everyone who followed along, coded with me, and supported this series. You guys are amazing! 🙌🎊"

// 💡 "But don’t stop here! Keep coding, start new projects, and let’s take our JavaScript skills to the next level together!"

// But wait—this isn’t the end of our coding journey! I have something exciting coming up… 🚀"

// 📢 "Introducing my next challenge: 'Patterns 30 Days Challenge'! 
// 🎯 In this series, we’ll deep dive into our pattern-based problems Whether you're a beginner or an advanced developer, this will level up your problem-solving skills. 💡💻"

// 📅 "The challenge starts SOON, so make sure you’re subscribed and hit the 🔔 bell icon to get notified!"

// 📢 "Let me know in the comments which pattern you're most excited to learn! And once again, THANK YOU for an amazing 100 days. See you in the next series! 🚀🔥"

// 📢 "If you found this series helpful, hit that 👍 like button, subscribe, and let me know in the comments what your favorite challenge was!"

