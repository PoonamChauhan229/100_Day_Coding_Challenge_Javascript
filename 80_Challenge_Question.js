// Write a function to check if an object contains only numeric values.
function hasOnlyNumericValues(obj) {
    for (const value of Object.values(obj)) {
        if (typeof value !== 'number' || isNaN(value)) {
            return false;
        }
    }
    return true;
}

// Example usage:
const obj1 = { a: 20, b: 30, c: 50 };
const obj2 = { a: 20, b: "30", c: 50 };
const obj3 = { a: 10, b: NaN, c: 40 };

console.log(hasOnlyNumericValues(obj1)); // true
console.log(hasOnlyNumericValues(obj2)); // false
console.log(hasOnlyNumericValues(obj3)); // false
