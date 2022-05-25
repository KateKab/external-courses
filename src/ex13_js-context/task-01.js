function Calculate() {
  let currentValue = 0;
  let called = '';

  function method(val) { return method[called](val); }

  method.reset = function () {
    currentValue = 0;
    called = 'reset';

    return this;
  };

  method.getResult = () => currentValue;

  method.setState = function (value) {
    if (!isNaN(value)) currentValue = value;
    called = 'setState';

    return this;
  };

  method.add = function (value) {
    if (!isNaN(value)) currentValue += value;
    called = 'add';

    return this;
  };

  method.subtract = function (value) {
    if (!isNaN(value)) currentValue -= value;
    called = 'subtract';

    return this;
  };

  method.multiply = function (value) {
    if (!isNaN(value)) currentValue *= value;
    called = 'multiply';

    return this;
  };

  method.divide = function (value) {
    if (!isNaN(value)) currentValue /= value;
    called = 'divide';

    return this;
  };

  method.fetchData = function (callback) {
    console.log('async operation finished');
    callback(500);
    called = 'fetchData';

    return this;
  };

  return method;
}

const Calculator = Calculate();

module.exports = Calculator;
