// Convert an array of objects into a single merged object.

function mergeObjects(arr) {
    return arr.reduce((acc, obj) => Object.assign(acc, obj), {});
}

// Example usage:
const arr = [{ a: 1 }, { b: 2 }, { c: 3 }];
const mergedObject = mergeObjects(arr);
console.log(mergedObject); // { a: 1, b: 2, c: 3 }
