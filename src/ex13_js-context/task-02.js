function Hangman(word) {
  let letters = word;
  let guessedLetters = [];
  let remainingLetters = letters.toLowerCase().split('');
  let wrongLetters = [];
  let called = '';

  for (let i = 0; i < remainingLetters.length; i += 1) {
    guessedLetters.push('_');
  }

  function method(val) {
    return method[called](val);
  }

  method.guess = function (letter) {
    if (remainingLetters.length > 0 && wrongLetters.length < 6) {
      if (remainingLetters.includes(letter)) {
        remainingLetters.filter((val) => val !== letter);
        guessedLetters[remainingLetters.indexOf(letter)] = letter;
        console.log(guessedLetters.join(''));
      } else {
        wrongLetters.push(letter);
        console.log(
          `wrong letter, ${
            6 - wrongLetters.length
          } errors left | ${wrongLetters}`,
        );
      }
    } else {
      console.log('Game over');
    }

    called = 'guess';

    return this;
  };

  method.getGuessedString = function () {
    console.log(guessedLetters.join(''));
    called = 'getGuessedString';

    return this;
  };

  method.getErrorsLeft = function () {
    console.log(6 - wrongLetters.length);
    called = 'getErrorsLeft';

    return this;
  };

  method.getWrongSymbols = function () {
    console.log(wrongLetters);
    called = 'getWrongSymbols';

    return this;
  };

  method.getStatus = function () {
    console.log(
      `${guessedLetters.join('')} | ${6 - wrongLetters.length} errors left`,
    );
    called = 'getStatus';

    return this;
  };

  method.startAgain = function (newWord) {
    letters = newWord;
    guessedLetters = [];
    remainingLetters = letters.toLowerCase().split('');
    wrongLetters = [];

    for (let i = 0; i < remainingLetters.length; i += 1) {
      guessedLetters.push('_');
    }

    called = 'startAgain';

    return this;
  };

  return method;
}

const hangman = Hangman();

module.exports = hangman;
