const messageHandler = (io, socket) => (message) => {
  console.log(`Message received from <${socket?.id}> -`, message);

  io.emit("message", { data: message, socketId: socket.id });
};

module.exports = messageHandler;
