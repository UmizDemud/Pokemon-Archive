export function debounce(f, delay) {
  let timerId;

  return function debouncedFunction(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      f(...args);
    }, delay);
  };
}