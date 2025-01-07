const userInput = [
    '2',
    '7',
    '2 4 6 8 9 10 12',
    '2 4 6 8 10 12',
    '6',
    '3 5 7 9 11 13',
    '3 5 7 11 13'
];

const results = [];
let index = 0;
const testCases = parseInt(userInput[index++]);

for (let t = 0; t < testCases; t++) {
    const N = parseInt(userInput[index++]);
    const batchA = userInput[index++].split(' ').map(Number);
    const batchB = userInput[index++].split(' ').map(Number);

    for (let i = 0; i < batchA.length; i++) {
        if (!batchB.includes(batchA[i])) {
            results.push(i + 1); // Return the package index (1-based)
            break;
        }
    }
}

results.forEach(result => console.log(result));
