const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
const io = socketio(server);

io.on('connection', (socket) => {
  console.log(`Client: ${socket.id} has connected`);

  socket.emit('messageFromServer', {
    data: 'Welcome from the server'
  });

  socket.on('messageFromClient', (data) => {
    console.log(`Data from ${socket.id}:`, data);
  });
});