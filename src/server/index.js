const express = require("express");
const path = require("path");
const socketio = require("socket.io");

const { APPLICATION_HOST } = require("../config/defaults");
const socketioConnectionHandler = require("../handlers/connection");

const getApplicationServer = ({
  port = APPLICATION_PORT,
  host = APPLICATION_HOST,
  listenerCallback = null,
}) => {
  const app = express();

  app.use(express.static(path.join(__dirname, "../client")));

  const expressServer = app.listen(port, host, listenerCallback);

  io = new socketio.Server(expressServer);

  io.on("connection", socketioConnectionHandler(io));

  return app;
};

module.exports = getApplicationServer;
