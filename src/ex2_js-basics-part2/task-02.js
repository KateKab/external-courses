function handleArray(arrayToHandle) {
  for (let i = 0; i < arrayToHandle.length; i += 1) {
    console.log(arrayToHandle[i]);
  }

  console.log(arrayToHandle.length);

  return undefined;
}

module.exports = handleArray;
