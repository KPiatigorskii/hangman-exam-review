const maxWrongGuesses = 6;

let wordToGuess = '';
let guessedLetters = [];
let wrongGuesses = 0;
let imageCount = 1;

function selectRandomWord() {
  const random = words[Math.floor(Math.random() * words.length)];
  return random;
}

function initializeGame() {
  wordToGuess = selectRandomWord();
  guessedLetters = Array(wordToGuess.length).fill('_');
  wrongGuesses = 0;

  updateWordDisplay();

  updateMeltingSnowmanGraphic();

  const lettersContainer = document.querySelector('.letters');
  while (lettersContainer.firstChild) {
    lettersContainer.removeChild(lettersContainer.firstChild);
  }

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement('button');
    button.innerText = letter;
    button.addEventListener('click', () => {
      handleGuess(letter);
    });
    lettersContainer.appendChild(button);
  }

  const messageContainer = document.querySelector('.message');
  messageContainer.innerText = '';
}

function updateWordDisplay() {
  const wordContainer = document.querySelector('.word');
  wordContainer.innerText = guessedLetters.join(' ');
}

function handleGuess(letter) {
  // chutou uma letra que tu já chutou antes
  if (guessedLetters.includes(letter)) {
    return;
  }

  const wordToGuessArr = [...wordToGuess];

  wordToGuessArr.forEach((_letter, index) => {
    if (_letter == letter) {
      guessedLetters[index] = _letter;
    }
  })

  if (!wordToGuess.includes(letter)) {
    wrongGuesses++;
    updateMeltingSnowmanGraphic();
  }

  updateWordDisplay();

  checkWinOrLose();
}

function updateMeltingSnowmanGraphic() {

  const meltingSnowmanContainer = document.querySelector('.MeltingSnowman');
  meltingSnowmanContainer.innerHTML = `<img src="msimages/MeltingSnowman${imageCount}.png" alt="MeltingSnowman ${imageCount}">`;
  imageCount++;
}

function checkWinOrLose() {

  if (guessedLetters.join('') === wordToGuess) {
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = 'You win!';
    const letterButtons = document.querySelectorAll('.letters button');
    letterButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', handleGuess);
    });
  } else if (wrongGuesses >= maxWrongGuesses) {
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = `You lose! The word was "${wordToGuess}".`;
    const meltingSnowmanContainer = document.querySelector('.MeltingSnowman');
    meltingSnowmanContainer.innerHTML = `<img src="msimages/gameover.png" alt="gameover">`;
    const letterButtons = document.querySelectorAll('.letters button');
    letterButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', handleGuess);
    });
  }
}

window.addEventListener('load', initializeGame);