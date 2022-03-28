export const { bind, dispatch } = (function () {
  const customEvents = {};
  return {
    bind: (key, handler) => {
      customEvents[key] = new CustomEvent(key);
    },
    dispatch: (key, e) => {
      dispatchEvent(customEvents[key]);
    },
  };
})();
