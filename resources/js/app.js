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
let winningWord = "CAT",
      winWhenEmpty = ["C","A","T"],
      guessedWrong,
      guessesLeft = 8,
      guessedAlready = ["M"];

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
      emmetHead01 = document.querySelector('#a01-head'),
      emmetTorso02 = document.querySelector('#a02-torso'),
      emmetRtArm03 = document.querySelector('#a03-rt-arm'),
      emmetLftArm04 = document.querySelector('#a04-lft-arm'),
      emmetRtLeg05 = document.querySelector('#a05-rt-leg'),
      emmetLftLeg06 = document.querySelector('#a06-lft-leg'),
      emmetRtFoot07 = document.querySelector('#a07-rt-foot'),
      emmetLftFoot08 = document.querySelector('#a08-lft-foot'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      listMsg = document.querySelector('#special-message'),
      resetBtn = document.querySelector('#reset-btn');


// Listen for Guess
guessBtn.addEventListener('click', function(){
      //e.preventDefault();
      let guess = guessInput.value;
      console.log("guess is " + guess);

      // Validate - Has this letter been guessed?
      (guessedAlready.includes(guess)) {
            setMessage(`${guess} has already been guessed, try a different letter`, "red");
            // Hoping that setting guess = empty string allows me to proceed
            guess = " ";
      }

      




      debugger
      // expected output: 12
      

      // CHECK IF WON
      if(guess === winningNum){
            
            // Disable input
            //guess.guessInput.disabled = true;
            // Change border color
            guessInput.style.borderColor = 'green';
            // Declare won
            //setMessage("you won", 'green');
            setMessage(`${winningNum} is correct, you win!`, 'green');

      } else if(guessesLeft > 1){
            setMessage("try again, " + guessesLeft + " guesses left.", 'blue');
            guessesLeft--;
            guessedAlready.push(guess);

      } else {
            setMessage("Sorry, you didn't win this time", 'blue');
            guessInput.value = "";

      }
});

// PLAY RESET EVENT LISTENER 
// RESET guessesLeft, clear message
// NEED to RESET THE winningNum

resetBtn.addEventListener('click', function(){
      window.location.reload();
      

});

// GENERATE COMPUTER"s GUESS
function getRandomNum(min, max){
      return Math.floor(Math.random()*(max-min+1)+min);
    }


// Set Message - buggy, maybe alert, ugh
function setMessage(msg, color){
      listMsg.style.color = color;
      listMsg.textContent = msg;
}

// List what has been guessed - not working
function setGuessed(guessedVal){
      listGuessed.textContent = guessedAlready;
}


