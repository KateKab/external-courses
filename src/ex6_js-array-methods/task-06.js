function reduce(array, callback, initialValue) {
  let i = 0;
  let previousValue = 0;

  if (arguments.length === 3) {
    previousValue = initialValue;
  } else {
    previousValue = array[0];
    i = 1;
  }

  for (i; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduce;
