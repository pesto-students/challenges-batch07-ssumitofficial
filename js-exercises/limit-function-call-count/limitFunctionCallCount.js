const limitFunctionCallCount = (callbackFunction, maxCallsCount) => {
  let callCounter = 0;

  return (...args) => {
    if (callCounter < maxCallsCount) {
      callCounter++;
      return callbackFunction(...args);
    }
    return null;
  }
};

export {
  limitFunctionCallCount,
};
