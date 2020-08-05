//some basic node practice
// setTimeout( () => {
//   console.log(a+b);
// }, 3000)
//
// console.log(__dirname);


//node versions 12 and up can you import statements
const script2 = require('./script2.js');

const a = script2.largeNumber;
const b = 5;

console.log(a+b);


//popular built-in modules
// const c = require('fs'); //filesystem
// const d = require('http'); //build a server

//const file = c.readFile; //output contents of file


/*
package nodemon good for developing--> install using npm -- remember to do npm init to create package.json file
nodemon allows us to keep watching for changes and updating terminal
when you change a file
* Add "start": "nodemon server.js" to package.json to make it listen to that server
*/
