const express = require('express');
const app = express();

const server = app.listen(5000, () =>
    console.log('The server is all fired up on port 5000')
);

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log("socket id", socket.id);
    console.log("Nice to meet you")

    socket.emit("Welcome", "hello my friend")
});