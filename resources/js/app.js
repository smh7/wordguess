/*  RULES OF THE GAME
- player must guess a letter
- player gets a number of guesses equal to number of tiles that make up person, 8
- Notify player of guesses remaining
- Tile the figure when guess is incorrect
- When figure is fully tiled game is over, player has lost
- Show letters that are correct in order of the word they spell
- If all letters are filled in before all tiles that make up a person are displayed, then user has won
- Notify player of the correct answer if they lose
- Let the player choose to play again
*/

// VARIABLE DECLARATION
let winningWord = "ZOO",
      winWhenZeroLength = [],
      guessedWrong,
      guessesLeft = 8,
      guessedAlready = [];

// UI ELEMENTS

const game = document.querySelector('#game'),
      letter0 = document.querySelector('#letter-0'),
      letter1 = document.querySelector('#letter-1'),
      letter2 = document.querySelector('#letter-2'),
      guessedWrong0 = document.querySelector('btn-guessed-wr-0'),
      guessedWrong1 = document.querySelector('btn-guessed-wr-1'),
      guessedWrong2 = document.querySelector('btn-guessed-wr-2'),
      guessedWrong3 = document.querySelector('btn-guessed-wr-3'),
      guessedWrong4 = document.querySelector('btn-guessed-wr-4'),
      guessedWrong5 = document.querySelector('btn-guessed-wr-5'),
      guessedWrong6 = document.querySelector('btn-guessed-wr-6'),
      guessedWrong7 = document.querySelector('btn-guessed-wr-7'),
      emmetHead01 = document.querySelector('#01-head'),
      emmetTorso02 = document.querySelector('#02-torso'),
      emmetRtArm03 = document.querySelector('#03-rt-arm'),
      emmetLftArm04 = document.querySelector('#04-lft-arm'),
      emmetRtLeg05 = document.querySelector('#05-rt-leg'),
      emmetLftLeg06 = document.querySelector('#06-lft-leg'),
      emmetRtFoot07 = document.querySelector('#07-rt-foot'),
      emmetLftFoot08 = document.querySelector('#08-lft-foot'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      listMsg = document.querySelector('#special-message'),
      resetBtn = document.querySelector('#reset-btn');