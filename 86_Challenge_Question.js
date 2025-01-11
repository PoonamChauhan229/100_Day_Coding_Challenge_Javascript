// Write a function to return an array of objects containing both key and value pairs.
function objectToArrayOfObjects(obj) {
    return Object.entries(obj).map(([key, value]) => ({ key, value }));
}

// Example usage:
const obj = { a: 1, b: 2, c: 3 };
const result = objectToArrayOfObjects(obj);
console.log(result);
// Output: [ { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } ]
