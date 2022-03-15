function insertIntoString(inputString, wordToInsert, position) {
  const words = inputString.split(' ');

  words.splice(position + 1, 0, wordToInsert);

  return words.join(' ');
}

module.exports = insertIntoString;
