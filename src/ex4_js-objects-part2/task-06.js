function changeWordCase(inputString) {
  const words = inputString.split(' ');
  const newString = words.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');

  return newString;
}

module.exports = changeWordCase;
