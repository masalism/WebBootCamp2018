// 1 //

// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// BONUS: Make a program that can subtract, multiply, and also divide!

/*
var first = prompt("Enter first number");
var second = prompt("Enter second number");
var sum = Number(first) + Number(second);
var minus = Number(first) - Number(second);
var multiply = Number(first) * Number(second);
var divide = Number(first) / Number(second);
alert("Sum = " + sum);
alert("Minus = " + minus);
alert("Multiply = " + multiply);
alert("Divide = " + divide);
*/

// 2 //

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"



var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

