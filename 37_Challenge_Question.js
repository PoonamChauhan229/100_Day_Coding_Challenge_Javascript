// Day 37 - Reverse the Entire Sentence (Word Order and Character Order)

// Hey everyone, welcome back to Code with Poonam! 🎉

// This is Day 37 of our 100 Days of Coding Challenge in JavaScript.

// Today’s challenge is all about reversing an entire sentence. 💡
// This includes reversing both the word order and the characters in each word!

// 🎯 Challenge Overview:
// Given a sentence, reverse the order of words and reverse the characters in each word.
// For example, if the input is "Welcome to JavaScript", the output will be "tpircSavaJ ot emocleW".

// Let’s break this down step by step! 🚀

function reverseEntireSentence(sentence) {
    console.log("Input Sentence:", sentence);

    // Step 1: Reverse the character order of the entire string
    const reversedString = sentence.split("").reverse().join("");
    console.log("Reversed String:", reversedString);

    // Step 2: Reverse the order of words
    const reversedSentence = reversedString.split(" ").reverse().join(" ");
    console.log("Reversed Sentence:", reversedSentence);

    return reversedSentence;
}

// 🛠️ Example Usage:
reverseEntireSentence("Welcome to JavaScript");
reverseEntireSentence("Coding is fun");

// 🔍 Breakdown of the Example:
// - Input: "Welcome to JavaScript".
// - Step 1: Reverse characters: "tpircSavaJ ot emocleW".
// - Step 2: Reverse word order: "tpircSavaJ ot emocleW".
// - Output: "tpircSavaJ ot emocleW".

// Try this function with your favorite sentences and share your results in the comments below! 👇

// And that’s it for today, folks! 🎉
// If you loved this challenge, don’t forget to like, share, and subscribe for more fun JavaScript challenges!
// See you tomorrow for Day 38. 🚀
