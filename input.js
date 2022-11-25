// Stores the active TCP connection object.
let connection;

const moveUp = "w";
const moveDown = "s";
const moveLeft = "a";
const moveRight = "d";

const handleUserInput = function(key) {
  console.log("pressed", key)
  if (key === moveUp) {
    connection.write('Move: up');
  }
  if (key === moveDown) {
    connection.write('Move: down');
  }
  if (key === moveLeft) {
    connection.write('Move: left');
  }
  if (key === moveRight) {
    connection.write('Move: right');
  }
}

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };