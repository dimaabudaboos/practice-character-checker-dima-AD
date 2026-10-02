const readlineSync = require('readline-sync');

// 1. Prompt the user for a word or phrase
let userString = readlineSync.question("Enter a word or phrase: ");

// 2. Prompt the user for an index number
let indexInput = readlineSync.questionInt("Enter an index number to find the character at that position: ");

// 3. Use bracket notation to access the character (with a safety check for valid index)
if (indexInput >= 0 && indexInput < userString.length) {
    // 4. Print out the character
    let character = userString[indexInput];
    console.log(`The character at index ${indexInput} is: '${character}'`);
} else {
    console.log(`Error: Index ${indexInput} is out of range for this string (Length: ${userString.length}).`);
}
