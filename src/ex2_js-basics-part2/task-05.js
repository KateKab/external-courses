function findMax(arrayToHandle) {
  let maxValue = 0;

  for (let i = 0; i < arrayToHandle.length; i += 1) {
    if (arrayToHandle[i] < arrayToHandle[i + 1]) {
      maxValue = arrayToHandle[i + 1];
    }
  }

  return maxValue;
}

module.exports = findMax;
