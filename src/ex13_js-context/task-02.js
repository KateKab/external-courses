function Hangman(word) {
  let letters = word.toLowerCase().split('');
  let guessedLetters = [];
  let remainingLetters = letters;
  let wrongLetters = [];

  for (let i = 0; i < remainingLetters.length; i += 1) {
    guessedLetters.push('_');
  }

  this.guess = function (letter) {
    if (remainingLetters.length > 0 && wrongLetters.length < 6) {
      if (remainingLetters.includes(letter)) {
        for (let i = 0; i < letters.length; i += 1) {
          if (letters[i] === letter) {
            guessedLetters[i] = letter;
          }
        }

        remainingLetters = remainingLetters.filter((val) => val !== letter);
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
  };

  this.getGuessedString = function () {
    console.log(guessedLetters.join(''));
  };

  this.getErrorsLeft = function () {
    console.log(6 - wrongLetters.length);
  };

  this.getWrongSymbols = function () {
    console.log(wrongLetters);
  };

  this.getStatus = function () {
    console.log(
      `${guessedLetters.join('')} | ${6 - wrongLetters.length} errors left`,
    );
  };

  this.startAgain = function (newWord) {
    letters = newWord;
    guessedLetters = [];
    remainingLetters = letters.toLowerCase().split('');
    wrongLetters = [];

    for (let i = 0; i < remainingLetters.length; i += 1) {
      guessedLetters.push('_');
    }
  };
}

const hangman = new Hangman();

module.exports = hangman;
