const debouncedOut = document.querySelector('.displayDebounced');
const debouncedInput = document.querySelector('.debouncedInput');
const regularOut = document.querySelector('.displayRegular');
const regularInput = document.querySelector('.regularInput');

function displayInput(e) {
  const { value } = e.target;
  debouncedOut.innerHTML = value;
}

function debounce(callback, delay) {
  return function perform(...args) {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= delay) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callback(...args), delay);
  };
}

const debounced = debounce(displayInput, 500);
debouncedInput.addEventListener('input', debounced);

regularInput.addEventListener('input', (e) => {
  const { value } = e.target;
  regularOut.innerHTML = value;
});
