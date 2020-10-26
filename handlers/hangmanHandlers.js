const { words } = require('../data/words');

const handleWords = (req, res) => {
  const { id } = req.params;
  const word = words.find((current) => current.id === id);
  if (!word) {
    res.status(400).json({
      status: 400,
      message: 'Word not found.'
    })
  } else {
    res.status(200).json({
      status: 200,
      data: word
    })
  }    
}

const handleRandomWord = (req, res) => {
  const randomWord = words[(Math.floor(Math.random() * words.length))];
  const { id, letterCount } = randomWord;
  res.status(200).json({
    status: 200,
    word: { id, letterCount }
  })
}

const handleGuessLetter = (req, res) => {
  const { id, letter } = req.params;
  const wordToGuess = words.find((current) => current.id === id);
  const wordArray = [];
  for (let i = 0; i < Number(wordToGuess.letterCount); i++) {
    if (letter.toLowerCase() === wordToGuess.word[i].toLowerCase()) {
      wordArray.push(true);
    } else {
      wordArray.push(false);
    }
  }
  if (letter.length !== 1) {
    res.status(400).json({
      status: 400,
      message: `More than one letter`
    })
  } else {
    res.status(200).json({
      status: 200,
      guessed: wordArray
    })
  }
}

module.exports = { handleWords, handleRandomWord, handleGuessLetter };