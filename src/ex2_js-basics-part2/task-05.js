function findMax(arrayToHandle) {
  let maxValue = 0;

  for (let i = 0; i < arrayToHandle.length; i += 1) {
    if (arrayToHandle[i] > maxValue) {
      maxValue = arrayToHandle[i];
    }
  }

  return maxValue;
}

module.exports = findMax;
