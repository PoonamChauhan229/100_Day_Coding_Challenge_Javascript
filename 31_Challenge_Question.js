// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 31 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about **reversing words in a sentence** while keeping their order intact. 💡
// This is a fun way to work with strings and arrays in JavaScript.

// Challenge Overview:
// Write JS Function to reverse each word individually but maintain the word order in the given sentence.
// For example, the input "Welcome to JavaScript" should return "emocleW ot tpircSavaJ".

//Approach
//split(" ")
// reverse() >> individual element >>split("") >>reverse() >>join()
//map((element)=> split("") >>reverse() >>join()) >> returns an array >>join() >> as a sentence

// Let’s solve this step by step! 🚀

function reverseWords(sentence) {
    console.log("Original Sentence:", sentence);

    // Step 1: Split the sentence into an array of words
    const wordsArray = sentence.split(" ");
    console.log("Split into Words:", wordsArray);

    // Step 2: Reverse each word
    const reversedWords = wordsArray.map(element => element.split("").reverse().join(""));
    console.log("Reversed Words:", reversedWords);

    // Step 3: Join the reversed words back into a single sentence
    const reversedSentence = reversedWords.join(" ");
    console.log("Reversed Sentence:", reversedSentence);

}

// Example call to test the function:
const input = "Welcome to JavaScript";
reverseWords(input); // Expected output: "emocleW ot tpircSavaJ"


// Breakdown of the Example:
// 1. Split "Welcome to JavaScript" into ["Welcome", "to", "JavaScript"].
// 2. Reverse each word: "Welcome" → "emocleW", "to" → "ot", "JavaScript" → "tpircSavaJ".
// 3. Combine the reversed words: "emocleW ot tpircSavaJ".

// Try this function with your own sentences to see how it works!
// This is a great challenge for practicing string and array manipulation in JavaScript.

// And that’s all for today! 🎉
// Don’t forget to like, share, and subscribe for more daily coding challenges.
// See you tomorrow for another exciting problem to solve! 🚀
