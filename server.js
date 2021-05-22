const express = require('express');
const http = require('http');
const app = express();
const dotenv = require('dotenv');
const server = http.createServer(app);
dotenv.config({ path: './config.env' });
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true,
});
app.use('/peerjs', peerServer);

server.listen(5000);
