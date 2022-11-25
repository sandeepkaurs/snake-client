const {connect} = require('./client');

console.log("Connecting ...");
const conn = connect();

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput = (key); 
  });
  return stdin;
};
