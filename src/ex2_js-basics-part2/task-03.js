function countEvenOdd(arrayToHandle) {
  const evenOddArray = [0, 0, 0];

  for (let i = 0; i < arrayToHandle.length; i += 1) {
    if (
      typeof arrayToHandle[i] === 'number'
      && Number.isNaN(arrayToHandle[i]) === false
    ) {
      if (arrayToHandle[i] % 2 === 0) {
        if (arrayToHandle[i] === 0) {
          evenOddArray[2] += 1;
        } else evenOddArray[0] += 1;
      } else evenOddArray[1] += 1;
    }
  }

  console.log(`[${evenOddArray[0]}, ${evenOddArray[1]}, ${evenOddArray[2]}]`);

  return evenOddArray;
}

module.exports = countEvenOdd;
