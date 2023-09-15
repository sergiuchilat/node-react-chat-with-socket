const express = require('express')
const app = express()
const appPort = 3001;
const socketPort = 5050;

const socketIO = require('socket.io');
const http = require("http");
const messages = [];

const socketServer = http.createServer(app);
const io = socketIO(socketServer,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(appPort, () => {
    console.log(`Example app listening on port ${appPort}`)
})

io.on('connection', (socket) => {
    socket.on('new-message', (newMessage) => {
        try {
            io.emit('new-message', newMessage)
            messages.push(newMessage)
            console.log(messages)
        } catch (e) {
            console.log(e.message);
        }
    });
})

socketServer.listen(socketPort, () => {
    console.log(`Socket IO listening on port ${socketPort}`)
});