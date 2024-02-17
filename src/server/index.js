const express = require("express");
const path = require("path");
const socketio = require("socket.io");

const defaults = require("../config/defaults");
const socketioConnectionHandler = require("../handlers/connection");

const getApplicationServer = ({
  port = defaults.SERVER_PORT,
  host = defaults.SERVER_HOST,
  listenerCallback = null,
  socketServerConfiguration = {},
}) => {
  const app = express();

  app.use(express.static(path.join(__dirname, "../client")));

  const expressServer = app.listen(port, host, listenerCallback);

  io = new socketio.Server(expressServer, socketServerConfiguration);

  io.on("connection", socketioConnectionHandler(io));

  return app;
};

module.exports = getApplicationServer;
