// Check if all object values are of the same data type.
function areAllValuesSameType(obj) {
    const values = Object.values(obj);
    if (values.length === 0) return true; // Return true for an empty object

    const firstType = typeof values[0]; // Get the type of the first value

    return values.every(value => typeof value === firstType);
}

// Example usage:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: "text", c: 3 };
const obj3 = {};

console.log(areAllValuesSameType(obj1)); // true
console.log(areAllValuesSameType(obj2)); // false
console.log(areAllValuesSameType(obj3)); // true (empty object)
