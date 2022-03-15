function convertToLowerCamelCase(inputString) {
  let words = inputString.toLowerCase().split(' ');
  const firstWord = words.shift();

  words = words.map((word) => word[0].toUpperCase() + word.substring(1)).join('');

  return firstWord + words;
}

module.exports = convertToLowerCamelCase;
