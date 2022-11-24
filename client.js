conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write('Name: SKS');
});


module.exports(client)