function cutString(inputString, numOfElements) {
  if (inputString.length > numOfElements) {
    return `${inputString.substring(0, numOfElements - 1)}${String.fromCharCode(8230)}`;
  }

  return undefined;
}

module.exports = cutString;
