///////////
// SCOPE //
///////////
/*
var fun = 5;

function funFunction () {
    var fun = "Hello";
    console.log(1, fun);
}

function funerFunction () {
    var fun = "bye";
    console.log(2, fun);
}

function funestFunction () {
    fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
*/

// EXERCISE: SCOPE //

/*
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); //3
}

//#2
// you must first run q2() in your console to add the new value. then run q22()
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); //5
}

// run in the console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5

//#3
function q3() {
    window.a = "hello";
}

// you must first run q3() in your console to add the a property to the window. then run q32()
function q32() {
    alert(a); //"hello"
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); //"test"
}

//#5 with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5
*/

///////////////////////////
// ADVANCED FLOW CONTROL //
///////////////////////////

//ternerary opertor
//condition ? expresion1 : expresion2;

/*
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "not available");

function condition() {
    if(isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access denied";
    }
}

var answer2 = condition();

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a ariver";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward"); //undefind

//#3 return value when moveCommand("back"); //you arrived home

//#4 return value when moveCommand("right"); //you found a river

//#5 return value when moveCommand("left"); //undefined
*/

/////////////////
// ES5 and ES6 //
/////////////////

// let + const //

/*
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
*/

// Destructuring //

/*
const name = 'john snow';

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;
*/

// Object properties //

/*
const name = 'john snow';

const a = "Simon";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}
*/

// Template strings //

/*
const name = "Sally";
const age = 34;
const pet = "horse";
// const greeting = "Hello " + name + " you seem to be doing " + greeting;

const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have!`;
*/

// Default arguments //

/*
function greet(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have!`;
}
*/

// Symbol //

/*
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
*/

// Arrow functions //
/*
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b; // single return
*/

///////////////////
// EXERCISE: ES6 //
///////////////////

/*
// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;

// Object properties
const a = 'test';
const b = true;
const c = 789;

var okObj = {
  a,
  b,
  c
};


// Template strings

const message = `Hello ${firstName} have I met you before? I think we met in ${city} + last summer no???`;

// default arguments
// default age to 10;
const isValidAge = (age = 10) => age;


// Symbol
// Create a symbol: "This is my first Symbol"

sym1 = Symbol("This is my first symbol");

// Arrow functions
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
*/

/////////////////////////
// AVDVANCED FUNCTIONS //
/////////////////////////

// ES5

/*
function first() {
    var greet = 'Hi';
    function second() {
        alert(greet);
    }
    return second
}

var newFunc = first();
newFunc();
*/
// ES6

/*
const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = 'bobby';
        alert(greet);
    }
    return second
}

const newFunc = first();
newFunc();

// Closures - function ran. Te function executed. It's never goinf tu run again.
// BUT it's going to remember that there are referenaces to those variables.
// So the child scopealways has access to the parent scope.

// Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); 

// Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding side effects and functional purity

var a = 1;
function b() {
    a = 2;
}
*/

// EXERCISE: Advanced functions

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

/*
const oneLineFunction = (a, b) => a * b;

oneLineFunction(7, 87);

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//16
*/
//What are the two elements of a pure function?
/*
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
*/

/////////////////////
// ADVANCED ARRAYS //
/////////////////////

/*
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
});

console.log('forEach', double);

// map

const mapArray = array.map(num => num * 2); // SHORT

console.log('map', mapArray);

// filter

const filterArray = array.filter(num => { // NOT SHORT
    return num > 5;
});

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return acumulator + num;
}, 0); //0 = acumulator

console.log('reduce', reduceArray);
*/

// EXERCISE: ADVANCED ARRAYS //

// Complete the below questions using this array:
/*
const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];
*/
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
/*

let users = [];
array.forEach(user => {
    let { username } = user; //username  from array(user);
    username = username + "!";
    users.push(username);
});

console.log(users);


//Create an array using map that has all the usernames with a "?" to each of the usernames

let mapUsers = array.map(user => {
    let { username } = user;
    return username + "?"
});

console.log(mapUsers);

//Filter the array to only include users who are on team: red

let userRed = array.filter(red => {
    return red.team === "red";
});

console.log(userRed);

//Find out the total score of all users using reduce

let totalScore = array.reduce((acc, num) => {
    return acc + num.score;
}, 0); 

console.log(totalScore);


// (1), what is the value of i? = index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
});

// pure
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const answer = array.map(user => {
    user.items = user.items.map(item => { // goes to objects array
        return item + "!"
    });
    return user;
})
console.log(answer);
*/

//////////////////////
// ADVANCED OBJECTS //
//////////////////////

/*
// reference type

var object1 = { value: 10 };
var object2 = object1; // reference
var object3 = { value: 10 };

// context vs scope

const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type); //gets access from Player constructor
        console.log('wizard', this);
    }
    play() {
        console.log(`Weeeee I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduce();
wizard2.introduce();
wizard1.play();
wizard2.play();
*/

// EXERCISE: ADVANCED OBJECTS //

/*
//Evaluate these:
//#1
//[2] === [2] //false
//{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; // 5
object1.a = 4; //4 , changes object1 from 5 to 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound() {
        console.log(`Mooo, I am ${this.name} and I am a ${this.type}, my color is ${this.color}`);
    }
}

const cow = new Mamal('Shelly', 'cow', 'black');
*/

/////////
// ES7 //
/////////

/*
const pets = ['cat', 'dog', 'bat'];

pets.includes('dog');

const square = (x) => x**2;
const cube = (y) => y**3;
*/

// EXERCISE: ES7 //

/*
// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah']; //false

dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons1.filter(name => name.includes('John')) // ['Johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = (num) =>num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

power100(10000) // Infinity
*/
