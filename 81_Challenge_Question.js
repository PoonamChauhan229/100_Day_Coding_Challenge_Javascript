// Merge two objects where values with the same keys are added together. in js

function mergeAndSum(obj1, obj2) {
    const result = { ...obj1 };

    for (const key in obj2) {
        result[key] = (result[key] || 0) + obj2[key];
    }

    return result;
}

// Example usage:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 3, b: 4, d: 5 };

const mergedObj = mergeAndSum(obj1, obj2);
console.log(mergedObj); // { a: 4, b: 6, c: 3, d: 5 }
