// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 37 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about reversing the entire sentence, including both the word order and the character order within each word. 💡
// This is a fantastic problem to practice string manipulation and array methods in JavaScript!

// 🎯 Challenge Overview:
// Given a sentence, reverse the order of the words and also reverse the characters of each word.
// For example, the input "Welcome to JavaScript" should return "tpircSavaJ ot emocleW".

// This problem is a slight variation of  **Day 31** challenge, where we reversed each word but kept the word order intact. 
// Today, we’ll be reversing both the word order and the characters in each word! Let's dive in! 🚀

// 🔍 Breakdown of the Example:
// - Input: "Welcome to JavaScript"
// - Step 1: split(" "): ["Welcome", "to", "JavaScript"].
// - Step 2: reverse the word >> map((element)=>element.split("").reverse().join("")) >> return an array
// - Step 3: Reverse the order of the words:  reverse() >> join("")"tpircSavaJ ot emocleW".
// - Output: "tpircSavaJ ot emocleW".

function reverseOrder(sentence) {
    console.log("Original Sentence:", sentence);

    // Step 1: Reverse the order of words by splitting the sentence into words
    const wordsArray = sentence.split(" ");
    console.log("Words Array:", wordsArray);

    // Step 2: Reverse each word by splitting it into characters, reversing them, and joining them back
    const reversedWords = wordsArray.map(word => word.split("").reverse().join(""));
    console.log("Reversed Words:", reversedWords);

    // Step 3: Reverse the order of the words in the sentence
    const reversedSentence = reversedWords.reverse().join(" ");
    console.log("Final Reversed Sentence:", reversedSentence);

    return reversedSentence;
}

// 🛠️ Example Usage:
reverseOrder("Welcome to JavaScript"); // Expected Output: "tpircSavaJ ot emocleW"
reverseOrder("Coding is fun"); // Expected Output: "nuf si gnidoC"

// 🔍 Breakdown of the Example:
// - Input: "Welcome to JavaScript"
// - Step 1: Split the sentence into words: ["Welcome", "to", "JavaScript"].
// - Step 2: Reverse each word: ["emocleW", "ot", "tpircSavaJ"].
// - Step 3: Reverse the order of the words: "tpircSavaJ ot emocleW".
// - Output: "tpircSavaJ ot emocleW".

// 🔥 Why is this useful?
// This challenge helps you practice string manipulation methods like `split()`, `reverse()`, and `join()`, which are essential for string and array handling in JavaScript.

// 🚀 And remember, in **Day 31** we solved a very similar problem, where we only reversed the characters of each word but kept the word order intact.

// Try this function with different sentences and see how it works! 🎉

// That’s all for today! 🎉
// If you enjoyed this challenge, make sure to like, share, and subscribe for more exciting coding challenges!
// See you tomorrow for Day 38 of our 100 Days of Coding Challenge. 🚀
