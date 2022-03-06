export const { bind, dispatch } = (function () {
  const eventHandlers = {};
  return {
    bind: (key, handler) => {
      //   customEvents[type] = new CustomEvent(type);
      eventHandlers[key] = handler;
    },
    dispatch: (key, e) => {
      //   dispatchEvent(customEvents[type]);
      const handler = eventHandlers[key];
      handler(e);
    },
  };
})();
