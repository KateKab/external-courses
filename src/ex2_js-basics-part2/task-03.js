function isEven(valueToHandle) {
  return valueToHandle % 2 === 0;
}

function countEvenOdd(arrayToHandle) {
  const evenOddArray = [0, 0, 0];

  for (let i = 0; i < arrayToHandle.length; i += 1) {
    if (typeof arrayToHandle[i] === 'number') {
      if (arrayToHandle[i] === 0) {
        evenOddArray[2] += 1;
      } else if (isEven(arrayToHandle[i])) {
        evenOddArray[0] += 1;
      } else evenOddArray[1] += 1;
    }
  }

  return evenOddArray;
}

module.exports = countEvenOdd;
