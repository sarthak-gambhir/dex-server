const defaults = require("./src/config/defaults");
const { defaultListenerCallbackGenerator } = require("./src/server/callbacks");
const getApplicationServer = require("./src/server");

const port = process.env.SERVER_PORT || defaults.SERVER_PORT;
const host = process.env.SERVER_HOST || defaults.SERVER_HOST;
const clientUrl = process.env.CLIENT_URL || defaults.CLIENT_URL;

getApplicationServer({
  port: port,
  host: host,
  listenerCallback: defaultListenerCallbackGenerator({
    port: port,
  }),
  socketServerConfiguration: {
    cors: {
      origin: clientUrl,
    },
  },
});
