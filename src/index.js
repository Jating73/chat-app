const path = require('path');
const express = require('express')
const http = require('http');
const socket = require('socket.io');
require('dotenv').config()


const app = express();
const server = http.createServer(app)
const io = socket(server)

const PORT = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));

io.on('connection', (socket) => {
    console.log("Web Socket Connection")

    socket.emit('message', 'Welcome')
})

server.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
})