// change everything below to the newer Javascript!

// #1. let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// #2 Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// #3 Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


// #4 Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// #5 Default Arguments
// default age to 10;
function isValidAge(age) {
    return age
}


// #6 Symbols
// Create a symbol: "This is my first Symbol"


// #7 Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


/* ------------------------------------------------------------------/*
/* ---------------------------SOLUTIONS -----------------------------/*
/* ------------------------------------------------------------------/*

// #1
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// #2
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
const {firstName, lastName, eyeColor} = person;
let {age} = person;



// #3
const a = 'test';
const b = true;
const c = 789;

const okObj = {a, b, c};



// #4
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// #5
function isValidAge(age=10){
  return age;
}
// -- or --
const isValidAge2 = (age = 10) => age;



// #6
sym = Symbol("This is my first Symbol");


// #7
const whereAmI = (username, location) => {
  if (username && location) {
      return "I am not lost";
  } else {
      return "I am totally lost!";
  }
}
