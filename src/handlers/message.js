const messageHandler = (io, socket) => (message) => {
  console.log(`Message received from <${socket?.id}> - ${message}`);

  io.emit("message", { message, id: socket.id });
};

module.exports = messageHandler;
