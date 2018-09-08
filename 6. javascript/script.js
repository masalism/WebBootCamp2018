///////
// 1 //
///////

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

///////
// 2 //
///////

// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:

//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

/*
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
*/

///////////////
// FUNCTIONS //
///////////////

/*
function sayHello () {
    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();

function sing(song) {
    console.log(song);
}

sing("Laa deee daaa");
sing("Helllooooo");
sing(" backstreets bacl alright");

function multiply(a, b) {
    // if (a > 10 || b > 10) {
    //     return "that\s too hard";
    // } else {
    //     return a * b;
    // }
    return a * b;
}

alert(multiply(3, 4));
*/

///////
// 3 //
///////

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

/*
function checkDriverAge() {
    var age = prompt("What is your age");
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
*/

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

/*
var checkDriverAge2 = function() {
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
*/

//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

/*
function checkDriverAgeBonus(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}
*/

////////////
// ARRAYS //
////////////

/*
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0][2]);
*/

///////
// 4 //
///////

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
// 2. Sort the array in order.
// 3. Put "Kiwi" at the end of the array.
// 4. Remove "Apples" from the array.
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

/*
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array.shift());
console.log(array.sort());
console.log(array.push("Kiwi"));

console.log(array.shift());
console.log(array.reverse());

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0]);
*/

/////////////
// OBJECTS //
/////////////

/*
var user = {
    name: "John",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AAHHHHH");
    }
};

// user.isMarried = true;
// user.spells[1]
// user.shout();

var list = [
    {
        username: "Andy",
        password: "secret"
    },
    {
        username: "Jess",
        password: "123"
    }
];

// list[0].password;
*/


///////
// 5 //
///////


// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

/*
var user = {
    username: "Mantas",
    password: 123
};

var database = [
    {
        username: "Mantas",
        password: 123
    }
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
*/


/////////////////////////////////
// EXERCISE: BUILDING FACEBOOK //
/////////////////////////////////

/*
var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];

var newsFeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What\'s your user name?");
var passwordPrompt = prompt("What\'s your password?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

signIn(userNamePrompt, passwordPrompt);
*/

////////////////////////////
// JAVASCRIPT TERMINOLOGY //
////////////////////////////

/*
//function declaration //
function newFunction() {

}

//function expression//
var newFunction = function() {

};

//expression//
1+3;
var a = 2;
return true;

//calling or invoking a function//
alert();
newFunction(param1, param2);

//asign a variable//
var a = true;

//function vs method//
function thisIsAFunction() {

}

var obj = {
    thisIsAMethod: function() {

    }
}

thisIsAFunction();
obj.thisIsAMethod();
*/

///////////
// LOOPS //
///////////

/*
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    // todos[i] = todos[i ] + "!";
    console.log(i);
}

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

var counterOne = 10;
while(counterOne > 10) {
    console.log(counterOne);
    counterOne--;
}

var counterTwo = 10;

do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 10);
*/




