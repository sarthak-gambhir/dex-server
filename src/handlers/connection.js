const messageHandler = require("./message");

const socketioConnectionHandler = (io) => (socket) => {
  console.log(`New connection established <${socket.id}>`);

  socket.on("message", messageHandler(io, socket));
};

module.exports = socketioConnectionHandler;
