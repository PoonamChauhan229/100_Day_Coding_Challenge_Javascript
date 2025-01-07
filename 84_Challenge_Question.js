// JavaScript function to reverse the keys and values order in an object:

function reverseKeysAndValues(obj) {
    const reversedObj = {};

    const entries = Object.entries(obj).reverse(); // Reverse the order of key-value pairs

    for (const [key, value] of entries) {
        reversedObj[value] = key; // Swap keys and values
    }

    return reversedObj;
}

// Example usage:
const obj = { a: 1, b: 2, c: 3 };
const reversed = reverseKeysAndValues(obj);
console.log(reversed); // { '3': 'c', '2': 'b', '1': 'a' }
