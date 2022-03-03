function handleArray(arrayToHandle) {
  let numOfElements = 0;

  for (let i = 0; i < arrayToHandle.length; i += 1) {
    console.log(arrayToHandle[i]);
    numOfElements += 1;
  }

  if (numOfElements === 0) return;
  console.log(numOfElements);
}

module.exports = handleArray;
