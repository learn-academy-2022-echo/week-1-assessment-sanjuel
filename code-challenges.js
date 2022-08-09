// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: 
// 1. create a function boilPoint
// 2. add temp as the parameter
// 3. use conditionals to assess whether the number provided is below, above, or at boiling point

const boilPoint = (temp) => {
    if(temp > 212) {
        return `${temp} is above boiling point` 
    } else if (temp < 212) {
        return `${temp} is below boiling point`
    } else { 
        return `${temp} is at boiling point`
    }
}

const temp1 = 42
const temp2 = 350
const temp3 = 212

console.log(boilPoint(temp1))
console.log(boilPoint(temp2))
console.log(boilPoint(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: 
// use the .concat method to merge the two arrays
// after that assign the new array a variable
// then use the .length command on the new variable of that array

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const myNumbers3 = myNumbers1.concat(myNumbers2) 
console.log(myNumbers3.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// first i will convert the string into an array
//then make that a variable 
// then i will use the .reverse command to reverse the characters in the array
// then make that a variable
// then i will use the .join command to turn it back into a string

const currentCohort = "Echo 2022"
const currentCohortRev = currentCohort.split("")
const currentCohortRevS = currentCohortRev.reverse()
console.log(currentCohortRevS.join(""))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: 
// first i will create a loop that checks every number in the array
// then i will use conditionals and a modulo operator to see if the number comes up with 0 or 1
//if the number is equal to 0, it will return "the number is EVEN"
// if it is not equal to zero, it will return "the number is ODD"
// if i wanted to use return on this, i think I could assign this whole thing as a function, then run it that way in console log, but I think this is good for now. 
const myArray = [13, 34, 5, 10, 27, 42]

for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] % 2 === 0) {
    console.log(`${myArray[i]} is EVEN`) 
    } else {
        console.log(`${myArray[i]} is ODD`) 
    }
}
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// first i need to create a function named numSubtract
// then I will have two parameters for numbers that I will input
// then i will use conditionals to check which number is larger
// then i will use the - to subtract the higher number from the lower number 
// then i will display that 

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const numSubtract = (num1, num2) => {
    if(num1 > num2) {
      return  Math.abs(num1 - num2)
    } else if (num1 < num2) {
      return  Math.abs(num2 - num1)
    } else {
        return "0"
    }
}
console.log(numSubtract(number3, number4))
