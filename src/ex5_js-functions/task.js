function Calculator() {
  let currentValue = 0;

  const reset = () => {
    currentValue = 0;
  };

  const getResult = () => currentValue;

  const add = (value) => {
    if (!isNaN(value)) currentValue += value;

    return add;
  };

  const subtract = (value) => {
    if (!isNaN(value)) currentValue -= value;

    return subtract;
  };

  const multiply = (value) => {
    if (!isNaN(value)) currentValue *= value;

    return multiply;
  };

  const divide = (value) => {
    if (!isNaN(value)) currentValue /= value;

    return divide;
  };

  return {
    reset,
    getResult,
    add,
    subtract,
    divide,
    multiply,
  };
}

const calculator = new Calculator();

module.exports = calculator;
