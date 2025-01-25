class ShoppingCart {
    constructor() {
        this.items = []; // Initialize an empty array to store items
    }

    // Add item to the cart
    addItem(item, price, quantity = 1) {
        const existingItem = this.items.find(i => i.item === item);
        if (existingItem) {
            existingItem.quantity += quantity; // If item exists, increase quantity
        } else {
            this.items.push({ item, price, quantity }); // Add new item
        }
    }

    // Remove item from the cart
    removeItem(item) {
        this.items = this.items.filter(i => i.item !== item); // Remove item by filtering out
    }

    // Calculate the total price of the items in the cart
    calculateTotal() {
        return this.items.reduce((total, { price, quantity }) => total + price * quantity, 0);
    }

    // Show all items in the cart
    showItems() {
        return this.items;
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem('Apple', 1.5, 3);
cart.addItem('Banana', 0.5, 5);
cart.addItem('Orange', 2, 2);

console.log(cart.showItems()); // Output: [ { item: 'Apple', price: 1.5, quantity: 3 }, { item: 'Banana', price: 0.5, quantity: 5 }, { item: 'Orange', price: 2, quantity: 2 } ]

console.log('Total Price:', cart.calculateTotal()); // Output: Total Price: 13

cart.removeItem('Banana');

console.log(cart.showItems()); // Output: [ { item: 'Apple', price: 1.5, quantity: 3 }, { item: 'Orange', price: 2, quantity: 2 } ]
console.log('Total Price:', cart.calculateTotal()); // Output: Total Price: 11
