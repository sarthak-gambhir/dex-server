const { APPLICATION_PORT, APPLICATION_HOST } = require("./src/config/defaults");
const { defaultListenerCallbackGenerator } = require("./src/server/callbacks");
const getApplicationServer = require("./src/server");

const port = process.env.PORT || APPLICATION_PORT;
const host = process.env.HOST || APPLICATION_HOST;

getApplicationServer({
  port: port,
  host: host,
  listenerCallback: defaultListenerCallbackGenerator({
    port: APPLICATION_PORT,
  }),
});
