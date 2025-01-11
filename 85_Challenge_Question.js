// Count how many times each value appears in an object.
function countValueOccurrences(obj) {
    const count = {};

    for (const value of Object.values(obj)) {
        count[value] = (count[value] || 0) + 1;
    }

    return count;
}

// Example usage:
const obj = { a: 1, b: 2, c: 1, d: 3, e: 2 };
const valueCounts = countValueOccurrences(obj);
console.log(valueCounts); // { '1': 2, '2': 2, '3': 1 }
