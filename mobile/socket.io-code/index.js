const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// when someone connects
io.on("connection", (socket) => {
  socket.broadcast.emit("hi");
  // one instance
  console.log("a user connected");
  // disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  // recieve chat message
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

io.emit("some event", {
  someProperty: "some value",
  otherProperty: "other value",
}); // This will emit the event to all connected sockets

server.listen(3000, () => {
  console.log("listening on *:3000");
});
