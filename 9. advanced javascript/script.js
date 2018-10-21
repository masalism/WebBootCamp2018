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