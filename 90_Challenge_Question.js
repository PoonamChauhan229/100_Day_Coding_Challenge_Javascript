// Create a function to find the sum of all numeric values in an object.

function sumNumericValues(obj) {
    return Object.values(obj)
        .filter(value => typeof value === 'number') // Filter only numeric values
        .reduce((sum, value) => sum + value, 0); // Sum up the numeric values
}

// Example usage:
const obj = { a: 1, b: 2, c: 'text', d: 3 };
const sum = sumNumericValues(obj);
console.log(sum); // Output: 6
