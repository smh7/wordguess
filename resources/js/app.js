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
let   winningWord = "ZOO",
      guessesLeft = 8,
      doneWhenEmpty = [],
      guessedAlready = [];