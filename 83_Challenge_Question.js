// Remove duplicate values from an object. in js

function removeDuplicates(obj) {
    const uniqueValues = new Set();
    const result = {};

    for (const [key, value] of Object.entries(obj)) {
        if (!uniqueValues.has(value)) {
            uniqueValues.add(value);
            result[key] = value;
        }
    }

    return result;
}

// Example usage:
const obj = { a: 1, b: 2, c: 1, d: 3, e: 2 };
const uniqueObj = removeDuplicates(obj);
console.log(uniqueObj); // { a: 1, b: 2, d: 3 }
