const { connect } = require('./client');
const { setupInput } = require('./input.js');

console.log("Connecting ...");
// One way to fix this is to pass the conn object returned by connect() to the setUpInput function. In truth, this is not the most ideal solution, but it is simple and good enough for our purposes.
setupInput(connect());

// setup interface to handle user input from stdin
