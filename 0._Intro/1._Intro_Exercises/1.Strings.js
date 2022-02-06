// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberThree = parseFloat(numberOne)+parseFloat(numberTwo);

console.log(numberThree);

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";


const anotherNumberThree = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);

console.log(anotherNumberThree.toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const four = (one+two+three)/3;

console.log(four.toFixed(5));



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters[2]);
console.log(letters.charAt(2));

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const fact1 = fact.slice(0,17)
const fact2 = fact.slice(17);
console.log(fact1+fact2.charAt(0).toUpperCase()+fact2.slice(1));

// --------------------------------------



