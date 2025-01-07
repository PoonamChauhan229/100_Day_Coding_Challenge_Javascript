// Write a function to create an object with keys as numbers and values as their squares.

function createSquareObject(n) {
    const result = {};
    
    for (let i = 1; i <= n; i++) {
        result[i] = i * i; // Square of each number
    }
    
    return result;
}

// Example usage:
const squareObj = createSquareObject(5);
console.log(squareObj);
// Output: { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 }
