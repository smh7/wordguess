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
      winWordArray = ["C", "A", "T"],
      // winWhenEmpty = ["C", "A", "T"],
      winWhenAllOnes = [0,0,0];
      guessedWrong = 0,
      numberGuessedRight = 0,
      guessesLeft = 8,
      guessedAlready = [],
      guessedRight = false,
      whatToRemove = [],
      guessedWrongUI = [],
      guessedRightUI = [],
      incorrectGuessIndex = -1;

// VARIABLE DECLARATION


// UI ELEMENTS

const game = document.querySelector('#game'),
      correctGuessUI = document.querySelector('#correctUILetterList'),
      incorrectUI = document.querySelector('#incorrect-guesses'),
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

// CREATE AN ARRAY FOR EMMET UI ELEMENTS      
      emmetUI = [
            emmetHead01,
            emmetTorso02,
            emmetRtArm03,
            emmetLftArm04,
            emmetRtLeg05,
            emmetLftLeg06,
            emmetRtFoot07,
            emmetLftFoot08];

// PLAY RESET EVENT LISTENER 
resetBtn.addEventListener('click', function () {
      window.location.reload();
});

// Listen for Guess
guessBtn.addEventListener('click', function () {
      let guess = guessInput.value.toUpperCase().trim();

      // Validate - Has this letter been guessed already?
      if (guessedAlready.includes(guess) || guess == " " ){
            setMessage(`${guess} has already been guessed, try a different letter`, "red");
            // Hoping that setting guess = empty string allows me to proceed
            guessInput.value = " ";
      }

      // ADD GUESS TO GUESSED ALREADY ARRAY - PREVENTS RE-SUBMITS
      guessedAlready.push(guess);
      console.log("here");
      console.log("winningWordArray " + winningWord[0] + " guess " + guess);
      console.log("winningWordArray " + winningWord[1] + " guess " + guess);
      console.log("winningWordArray " + winningWord[2] + " guess " + guess);
      
      // MAYBE PUT THIS INTO A FUNCTION THAT GETS CALLED
      // Check whether Guessed Letter matches any letter in winWordArray
            for (i = 0; i < 3; i++) {
                  if ( winWordArray[i] === guess) {
                        guessedRight = true;
                        guessedRightUI[i] = guess;
                        numberGuessedRight++;
                        console.log("winWordArray " + winningWord[i] + " === " + " guess " + guess + " index i is " + i  );
                        // FIND INDEX THIS LETER SHOULD BE ASSIGN TO VARIABLE CAN USE AS ID AND ORDERING OF ELEMENTS TO SPELL WORD
                        // maybe should have done this so could add class float-left, float-middle, float-right
                       
                        // UPDATE BUTTON ELEMENT
                        updateCorrectLetterUI(i, guess);


                  }  else {
                        console.log("winWordArray " + winningWord[i] + " !=== " + " guess " + guess + " index i is " + i );

            } 
      }
            // UPDATE GUESSES LEFT
            guessesLeft--;


            // UPDATES IF GUESS WAS INCORRECT 
            if(guessedRight === false) {
                  incorrectGuessIndex ++;

                  // Create button element as UI Element to display incorrect guesses
                  const buttonWrongGuess = document.createElement('button');
                  // Add Class
                  buttonWrongGuess.className = 'btn btn-light';
                  // Add Text
                  buttonWrongGuess.appendChild(document.createTextNode(guess));
                  // Add to document section
                  incorrectUI.appendChild(buttonWrongGuess);
                  // Make Next Emmet Tile More Visible
                  emmetUI[incorrectGuessIndex].style.opacity = "1.0";
            
                  // CHECK iF LOST
                  if(guessesLeft === 0) {
                        setMessage("Sorry, you didn't win this time", 'blue');
                        guessInput.disabled = true;
                        // guessInput.value = "";
                  }
            }
            


            // CHECK IF WON
            if (numberGuessedRight === 3) {
                        // success
                        // change class btn-primary to btn-success
                        
                        // show Emmet in paradise
                  // Disable input
                  guessInput.disabled = true;
                  // Change border color
                  guessInput.style.borderColor = 'green';
                  // Declare won
                  setMessage(`${winningWord} is correct, you win!`, 'green');

            // } else if (guessesLeft > 0) {
            } else {
                  setMessage("try again, " + guessesLeft + " guesses left.", 'blue');
            }
            
      
            // CLEAR INPUT
            guessInput.value = " ";
            // Reset GUESSED RIGHT
            guessedRight = false;
            
               
            
});


// GENERATE COMPUTER"s GUESS
function getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
}


// Set Message - buggy, maybe alert, ugh
function setMessage(msg, color) {
      listMsg.style.color = color;
      listMsg.textContent = msg;
}

function updateCorrectLetterUI(index, letter) {
      
      if(index === 0){
            var buttonCorrectGuess0 = document.getElementById('btn-guess-right-0')
            buttonCorrectGuess0.innerHTML = letter;   
      } else if(index === 1){
            var buttonCorrectGuess0 = document.getElementById('btn-guess-right-1')
            buttonCorrectGuess0.innerHTML = letter;   
      } else if(index === 2){
            var buttonCorrectGuess0 = document.getElementById('btn-guess-right-2')
            buttonCorrectGuess0.innerHTML = letter;
      }

};
