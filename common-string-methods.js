/*Practice Problem 1
Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.*/

let searchString = "Learning JavaScript is fun!";
if(searchString.includes("JavaScript"))
{
  console.log("The string contains JavaScript");
}
else console.log("String not found");

/*Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.*/
let string1 = " CODE BOOTCAMP ";
let newString = string1.toLowerCase().trim();
console.log(newString.replace("BOOTCAMP","JAVASCRIPT"));//or
console.log(newString.replace("bootcamp","javascript"));

/*Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.*/
let brealString = "Coding is fun and educational";
let splitString = brealString.split(" ");
console.log(splitString);

/*Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.*/
let subString = "Bootcamp";
console.log("The first character of Bootcamp is " + subString.charAt(0));
console.log("The sliced word is " + subString.slice(4,8));



/* This question is not listed in the practice foundation 
Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").


Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScritt"); // Your code here

let codingPosition = inputString.indexOf("Coding"); // Your code here
let startsWithWelcome = inputString.startsWith("Welacome"); // Your code here
let endsWithToday = inputString.endsWith("today"); // Your code here

// 2. Transforming
let lowercaseString = inputString.toLowerCase(); // Your code here
let uppercaseString = inputString.toUpperCase(); // Your code here
let trimmedString = inputString.trim(); // Your code here
let replacedString = inputString.replace("JavaScript", "coding"); // Your code here

// 3. Breaking Apart
let wordsArray = inputString.split(" "); // Your code here

// 4. Retrieving
let firstCharacter = inputString.trim().charAt(0); // Your code here
let extractedBootcamp = inputString.slice(24, 33); // Your code here

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp
}); 


/* Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").*/


let animals = ["dog", "cat", "elephant", "giraffe"];

animals.push("lion");
console.log(animals.length);

//
// let colors = ["red", "green", "blue"];

let colors = ["red", "blue", "green", "yellow"];
let middleColors = colors.slice(1,3);
console.log(middleColors);

for(let i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

let animals1 = [ ];
animals1.push("dog","cat");
console.log(animals1);
animals1.unshift("elephant");
console.log(animals1);
console.log(animals1.length);
let lastRemoved = animals.pop();
console.log(animals1);



