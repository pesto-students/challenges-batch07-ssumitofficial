function debounce(fn, timeInMs) {
  let timer;
  
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, timeInMs);
  };
}

export { debounce };
