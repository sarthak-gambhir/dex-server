const defaultListenerCallbackGenerator =
  ({ port }) =>
  () => {
    console.log(`Dex server running on port ${port}`);
  };

module.exports = {
  defaultListenerCallbackGenerator,
};
