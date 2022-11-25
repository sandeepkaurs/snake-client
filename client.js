// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "192.168.1.86",
    port: 50541,
  });

  conn.setEncoding("utf8");
  // console.log("Connected");

  conn.on('connect', () => {
    console.log("Connected to Server.");
    conn.write('Name: SKS');
  });

  // conn.on('Move: up', moveUp => {
  //   console.log("Move: up");
  // });

  return conn;
};

module.exports = {connect}