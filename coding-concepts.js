// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: That will log the number of characters in the string. In this case it would be 10, since we include the space 
// b) Verify and explain: 10. The .length command displays the amount of characters in the string, so it displayed 10.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: I know it will display the "Hello World!" string, but I'm not sure what the 4 will do. I know it will augment the string in some way.
// b) Verify and explain: o. It took the index of the string at the fourth character. Since index starts from 0, that would be O in the fourth slot. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: It will display the "Ruby" string. This is because index starts at 0, so 1 would be "Ruby"
// b) Verify and explain: Ruby. It displayed ruby as a string, since getting the index of an array gives you the string that matches that index. In this case Ruby


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: This will display both the "saturday" and "sunday" strings as all uppercase. like SATURDAY SUNDAY. this is because thats what the .toUpperCase method does. 
// b) Verify and explain: I got an error, saying that "TypeError: weekendDays.toUpperCase is not a function". This is because .toUpperCase is for strings, not arrays. Even though there are strings in the array, we would need to first .join the array in order to do the .toUpperCase method. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: This will display the type of data, in this case a string, from the typeof method. Then, it will display the length of the characters in the strings, shown by the .length method. It should look something like
// String, 6
// String, 6
// String, 7
// b) Verify and explain: I got back the string number. I think this is because the dataTypes.length returned a number, in the first case 6, and then that was read in the typeof method and displayed instead of the string. I had assumed because typeof was first, that it would first read it as a string, but I was wrong there. 

