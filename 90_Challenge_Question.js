// Write a function to find the longest string value in an object.

function findLongestString(obj) {
    return Object.values(obj)
        .filter(value => typeof value === 'string') // Filter only string values
        .reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

// Example usage:
const obj = { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' };
const longestString = findLongestString(obj);
console.log(longestString); // Output: 'grapefruit'
